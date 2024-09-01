import UserTable from "@/components/user-details/UserTable";
import { Search } from "@/components/user-details/Search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-7 pt-14 md:px-16 lg:px-36 md:pb-14 md:pt-14 bg-slate-100 dark:bg-slate-950">
      <Search/>
      <UserTable/>
    </main>
  );
}
