"use client";

import { Input } from "../ui/input";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hook";
import { setParams } from "@/lib/store/searchSlice";
import { SearchType } from "@/lib/types";

export const Search = () => {
  const dispatch = useAppDispatch();
  const initialParams = useAppSelector((state) => state.search.params);

  const [searchParams, setSearchParams] = useState<SearchType>(initialParams);

  useEffect(() => {
    dispatch(setParams(searchParams));
  }, [dispatch, searchParams]);

  const handleSearch = (field: string, value: string) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      [field]: value,
    }));
  };

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-custom-blue dark:text-blue-400"
        >
          Name
        </label>
        <Input
          id="name"
          type="text"
          placeholder="Search by name"
          value={searchParams?.name}
          onChange={(e) => handleSearch("name", e.target.value)}
          className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
      <div>
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-custom-blue dark:text-blue-400"
        >
          Username
        </label>
        <Input
          id="username"
          type="text"
          placeholder="Search by username"
          value={searchParams.userName}
          onChange={(e) => handleSearch("userName", e.target.value)}
          className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-custom-blue dark:text-blue-400"
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
          className="block mb-2 text-sm font-medium text-custom-blue dark:text-blue-400"
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
  );
};
