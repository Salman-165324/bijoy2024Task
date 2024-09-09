"use server";

import { signIn, signOut } from "@/auth";

export async function doGoogleSign(formData) {
  const actionData = formData.get("action");

  await signIn(actionData, { redirectTo: "/user" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
