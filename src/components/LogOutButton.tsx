"use client";

import logout from "@/actions/auth-actions";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  return <button onClick={() => logout()}>Log out</button>;
};

export default LogoutButton;
