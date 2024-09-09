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
          <form className="grid  gap-4">
         

            <Button type="submit" className="w-full">
              <FaGoogle className = "mr-3 h-4 w-4"/> Login With Google
            </Button>
          </form>
        </CardContent>
       
      </Card>
    </div>
  );
};

export default LoginForm;
