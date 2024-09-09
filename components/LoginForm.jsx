import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import React from "react";
import { Button } from "./ui/button";
import { FaGoogle } from "react-icons/fa6";
import { doGoogleSign } from "@/lib/actions/authentication";


const LoginForm = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Card className="">
        <CardHeader className="text-xl">
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Welcome to Bijoy 2024 Website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={doGoogleSign} className="grid  gap-4">
         

            <Button type="submit" name="action" value="google" className="w-full">
              <FaGoogle className = "mr-3 h-4 w-4"/> Login With Google
            </Button>
          </form>
        </CardContent>
       
      </Card>
    </div>
  );
};

export default LoginForm;
