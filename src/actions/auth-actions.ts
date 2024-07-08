"use server";

import { lucia } from "@/lib/lucia";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Argon2id } from "oslo/password";

export async function signup(formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!name || !email || !password) {
    throw Error("Missing required fields");
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    throw Error("User already exists");
  }

  const hashedPassword = await new Argon2id().hash(password);

  const user = await prisma.user.create({
    data: {
      email: email.toLowerCase(),
      name: name,
      hashedPassword,
    },
  });

  const session = await lucia.createSession(user.id, {});

  const sessionCookie = await lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  redirect("/");
  return { success: true };
}
