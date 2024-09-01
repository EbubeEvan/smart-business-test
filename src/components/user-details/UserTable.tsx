"use client";

import { useMemo } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useGetUsersQuery } from "@/lib/store/apiSlice";
import { useAppSelector } from "@/lib/store/hook";
import { TableSkeleton } from "./TableSkeleton";

export default function UserTable() {
  const { data, isLoading, isFetching, error } = useGetUsersQuery();
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

  console.log({ isLoading, isFetching, data, error });

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
