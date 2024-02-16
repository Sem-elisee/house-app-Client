"use client";
import * as React from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  ColumnFiltersState,
  // getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Input } from "@/Components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";

// import { Button } from "@/Components/ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <div>
      <div className="flex items-center ">
        <Input
          placeholder="Filter Email..."
          value={(table.getColumn("Email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("Email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm h-[43px]"
        />
      </div>
      <div className="rounded-md border shadow-md relative top-4">
        <Table>
          <TableHeader className="">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div> */}
    </div>
  );
}