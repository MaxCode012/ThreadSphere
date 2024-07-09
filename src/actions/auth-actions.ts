"use server";

import { lucia } from "@/lib/lucia";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";
import { Argon2id } from "oslo/password";

export async function signup(formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!name || !email || !password) {
    return { success: false, message: "Missing required fields" };
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return { success: false, message: "User already exists" };
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
  return { success: true, message: "Successfully signed up" };
}
