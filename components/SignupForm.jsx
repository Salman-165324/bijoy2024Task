"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@conform-to/react";
import Link from "next/link";
import { useFormState } from "react-dom";

import { parseWithZod } from "@conform-to/zod";
import { signupSchema } from "@/lib/signupSchema";
import { signup } from "@/lib/actions/authentication";

export default function SignupForm() {
  const [lastResult, action] = useFormState(signup, undefined);
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: signupSchema });
    },

    // Validate the form on blur event triggered
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center">
      <Card className="">
        <CardHeader className="text-xl">
          <CardTitle>Sign up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id={form.id}
            onSubmit={form.onSubmit}
            action={action}
            className="grid  gap-4"
          >
            <div className="grid gap-2">
              <Label htmlFor="last-name">Full Name</Label>
              <Input
                id="full-name"
                placeholder="Full Name"
                key={fields.fullName.key}
                name={fields.fullName.name}
                defaultValue={fields.fullName.initialValue}
              ></Input>
              <div>{fields.fullName.errors}</div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="zip-code">Zip Code</Label>
              <Input
                id="zip-code"
                placeholder="Zip Code"
                key={fields.zipCode.key}
                name={fields.zipCode.name}
                defaultValue={fields.zipCode.initialValue}
              ></Input>
              <div>{fields.zipCode.errors}</div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                key={fields.email.key}
                name={fields.email.name}
                defaultValue={fields.email.initialValue}
                 autoComplete="email"
              />
              <div>{fields.email.errors}</div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                key={fields.password.key}
                name={fields.password.name}
                defaultValue={fields.password.initialValue}
                 autoComplete="new-password"
              />
              <div>{fields.password.errors}</div>
            </div>

            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <Link className="underline text-blue-600 line" href="/login">
            Login with Google
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
