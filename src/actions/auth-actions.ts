"use server";

import { destroySession, lucia } from "@/lib/lucia";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
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

export async function signin(formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return { success: false, message: "Missing required fields" };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user || !user.hashedPassword) {
    return { success: false, message: "Invalid credentials" };
  }

  const passwordMatch = await new Argon2id().verify(
    user.hashedPassword,
    password
  );

  if (!passwordMatch) {
    return { success: false, message: "Invalid credentials" };
  }

  const session = await lucia.createSession(user.id, {});
  const sessionCookie = await lucia.createSessionCookie(session.id);

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return { success: true, message: "Successfully signed in" };
}

export async function logout() {
  await destroySession();
  return redirect("/signin");
}
