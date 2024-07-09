import SignInForm from "@/components/forms/SignInForm";

import Image from "next/image";

export const metadata = {
  title: "Sign In",
};

export default function SignIn() {
  return (
    <main className="lg:px-60 px-11 lg:flex ">
      <div className="mt-24 space-y-[45px] lg:mr-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left">
          Hey, <br />
          Welcome back
        </h1>
        <SignInForm />
      </div>
      <div className="mt-24 hidden lg:block">
        <Image src="/auth.svg" width={550} height={550} alt="auth image" />
      </div>
    </main>
  );
}
