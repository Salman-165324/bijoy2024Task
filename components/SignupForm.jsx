"use client"
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
import Link from "next/link";

export default function SignupForm() {
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
          <form className="grid  gap-4">
       
            <div className="grid gap-2">
              <Label htmlFor="last-name">Full Name</Label>
              <Input id="full-name" placeholder="Full Name"></Input>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>

            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </form>
        </CardContent>
        <CardFooter>
        <Link className="underline text-blue-600 line" href ="/login">Login with Google</Link>
        </CardFooter>
      </Card>
    </section>
  );
}
