import { verifyAuth } from "@/lib/lucia";
import { redirect } from "next/navigation";

export default async function Home() {
  const result = await verifyAuth();

  if (!result.user) {
    return redirect("/signin");
  }

  return <main>App</main>;
}
