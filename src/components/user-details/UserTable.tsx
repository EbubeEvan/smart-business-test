"use client";

import { useMemo } from "react";

import { useGetUsersQuery } from "@/lib/store/apiSlice";
import { useAppSelector } from "@/lib/store/hook";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { TableSkeleton } from "./TableSkeleton";

export default function UserTable() {
  const { data, isLoading, error } = useGetUsersQuery();
  const searchParams = useAppSelector((state) => state.search.params);

  const filteredUsers = useMemo(() => {
    return data?.filter((user) => {
      const { name, userName, email, phone } = searchParams;
      return (
        user.name.toLowerCase().includes(name.toLowerCase()) &&
        user.username.toLowerCase().includes(userName.toLowerCase()) &&
        user.email.toLowerCase().includes(email.toLowerCase()) &&
        user.phone.toLowerCase().includes(phone.toLowerCase())
      );
    });
  }, [data, searchParams]);

  // Handling various error states
  if (error) {
    if ("status" in error) {
      if (error.status === "FETCH_ERROR") {
        return (
          <p className="text-red-500 mt-20">
            Network error: Please check your internet connection.
          </p>
        );
      } else if (error.status === "PARSING_ERROR") {
        return (
          <p className="text-red-500 mt-20">Data parsing error occurred.</p>
        );
      } else if (error.status === "TIMEOUT_ERROR") {
        return <p className="text-red-500 mt-20">Service Timeout.</p>;
      } else if (error.status === 404) {
        return <p className="text-red-500 mt-20">Resource not found.</p>;
      } else if (error.status === 500) {
        return <p className="text-red-500 mt-20">Server error occurred.</p>;
      }
    } else {
      return <p>An unexpected error occurred.</p>;
    }
  }

  if (!filteredUsers?.length && !isLoading) {
    return <p className="text-center mt-20">No results</p>;
  }

  return (
    <div className="w-full flex-1">
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <div className="w-full">
          <div className="overflow-x-auto mt-10">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent dark:hover:bg-transparent">
                  <TableHead className="text-custom-blue dark:text-blue-400">
                    Name
                  </TableHead>
                  <TableHead className="text-custom-blue dark:text-blue-400">
                    Username
                  </TableHead>
                  <TableHead className="text-custom-blue dark:text-blue-400">
                    Email
                  </TableHead>
                  <TableHead className="text-custom-blue dark:text-blue-400">
                    Phone
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers?.map((user) => (
                  <TableRow
                    key={user.id}
                    className="hover:bg-blue-300/20 dark:hover:bg-blue-900/20 transition-colors"
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
      )}
    </div>
  );
}
