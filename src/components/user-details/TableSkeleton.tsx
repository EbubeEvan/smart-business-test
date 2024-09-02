import { Skeleton } from "../ui/skeleton";
import {
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { TABLE_SKELETON_ITERATOR } from "@/lib/data";

export const TableSkeleton = () => {
  return (
    <div className="w-full flex-1">
      <div className="w-full">
        <div className="overflow-x-auto mt-10">
          <Table className="hover:bg-transparent">
            <TableHeader>
              <TableRow className="hover:bg-transparent dark:hover:bg-transparent border-none">
                <TableHead>
                  <Skeleton className="h-8 w-[10rem]" />
                </TableHead>
                <TableHead>
                  <Skeleton className="h-8 w-[10rem]" />
                </TableHead>
                <TableHead>
                  <Skeleton className="h-8 w-[10rem]" />
                </TableHead>
                <TableHead>
                  <Skeleton className="h-8 w-[10rem]" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {TABLE_SKELETON_ITERATOR.map((row) => (
                <TableRow
                  key={row}
                  className="hover:bg-transparent dark:hover:bg-transparent border-none"
                >
                  <TableCell>
                    <Skeleton className="h-8 w-[10rem]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-8 w-[10rem]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-8 w-[10rem]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-8 w-[10rem]" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
