"use server";

import { signIn, signOut } from "@/auth";

import { redirect } from 'next/navigation';
import { parseWithZod } from '@conform-to/zod';
import { signupSchema } from '@/lib/signupSchema';

export async function doGoogleSign(formData) {
  const actionData = formData.get("action");

  await signIn(actionData, { redirectTo: "/user" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}


export async function signup(prevState, formData) {
  const submission = parseWithZod(formData, {
    schema: signupSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  redirect('/success');
}