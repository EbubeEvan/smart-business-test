import React from "react";
import { ModeToggle } from "../ui/mode-toggle";

export const Heading = () => {
  return (
    <header className="bg-custom-blue text-white p-4 flex justify-between items-center w-full">
      <h2 className="text-2xl font-bold">User Management</h2>
      <ModeToggle />
    </header>
  );
};
