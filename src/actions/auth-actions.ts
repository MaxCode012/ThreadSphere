"use server";

import { prisma } from "@/lib/prisma";
import { Argon2id } from "oslo/password";

export async function signup(formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  const errors: { [key: string]: string } = {};

  if (!name || !email || !password) {
    throw Error("Missing Required fields");
  }

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
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
}
