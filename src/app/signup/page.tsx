import SignUpForm from "@/components/forms/SignUpForm";
import { verifyAuth } from "@/lib/lucia";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Sign Up",
};

export default async function SignUp() {
  const { user } = await verifyAuth();

  if (user) {
    return redirect("/");
  }

  return (
    <main className="lg:px-60 px-11 lg:flex lg:justify-between">
      <div className="mt-24 space-y-[45px]">
        <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left">
          Hey, <br />
          Welcome back
        </h1>
        <SignUpForm />
      </div>
      <div className="mt-24 hidden lg:block">
        <Image src="/auth.svg" width={550} height={550} alt="auth image" />
      </div>
    </main>
  );
}
