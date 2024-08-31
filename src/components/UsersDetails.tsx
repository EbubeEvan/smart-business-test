"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { ModeToggle } from "./ui/mode-toggle";

export default function Component() {
  const [searchParams, setSearchParams] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const users = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      phone: "555-1234",
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      email: "jane.smith@example.com",
      phone: "555-5678",
    },
    {
      id: 3,
      name: "Bob Johnson",
      username: "bobjohnson",
      email: "bob.johnson@example.com",
      phone: "555-9012",
    },
    {
      id: 4,
      name: "Alice Williams",
      username: "alicewilliams",
      email: "alice.williams@example.com",
      phone: "555-3456",
    },
    {
      id: 5,
      name: "Tom Brown",
      username: "tombrown",
      email: "tom.brown@example.com",
      phone: "555-7890",
    },
  ];

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const { name, username, email, phone } = searchParams;
      return (
        user.name.toLowerCase().includes(name.toLowerCase()) &&
        user.username.toLowerCase().includes(username.toLowerCase()) &&
        user.email.toLowerCase().includes(email.toLowerCase()) &&
        user.phone.toLowerCase().includes(phone.toLowerCase())
      );
    });
  }, [searchParams]);

  const handleSearch = (field: string, value: string) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      [field]: value,
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md">
      <div className="p-6">
        <header className="bg-[#0078d7] text-white rounded-t-lg p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">User Management</h2>
          <ModeToggle />
        </header>
        <div className="mt-6 grid grid-cols-4 gap-4 mb-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Search by name"
              value={searchParams.name}
              onChange={(e) => handleSearch("name", e.target.value)}
              className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Username
            </label>
            <Input
              id="username"
              type="text"
              placeholder="Search by username"
              value={searchParams.username}
              onChange={(e) => handleSearch("username", e.target.value)}
              className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Search by email"
              value={searchParams.email}
              onChange={(e) => handleSearch("email", e.target.value)}
              className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Phone
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="Search by phone"
              value={searchParams.phone}
              onChange={(e) => handleSearch("phone", e.target.value)}
              className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-[#0078d7] text-white">
              <TableRow>
                <TableHead className="text-white">Name</TableHead>
                <TableHead className="text-white">Username</TableHead>
                <TableHead className="text-white">Email</TableHead>
                <TableHead className="text-white">Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow
                  key={user.id}
                  className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
