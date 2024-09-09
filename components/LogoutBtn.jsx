import React from "react";
import { Button } from "./ui/button";
import { doLogout } from "@/lib/actions/authentication";

const LogoutBtn = () => {
  return (
    <form className = "mt-4" action={doLogout}>
      <Button>Logout</Button>
    </form>
  );
};

export default LogoutBtn;
