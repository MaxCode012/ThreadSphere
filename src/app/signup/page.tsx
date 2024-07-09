import SignUpForm from "@/components/SignUpForm";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sign Up",
};

export default function SignUp() {
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
