import React, { useEffect, useState } from "react";
import CardMenu from "src/components/card/CardMenu";
import Card from "src/components/card";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";

type RowObj = {
  id: number;
  patientName: string;
  patientNationalID: string;
  createdAt: string;
  frequentSickness: string;
};

const columnHelper = createColumnHelper<RowObj>();

const getAllPatients = async() => {
  const response = await fetch('http://localhost:4000/api/patients')
  const patients = await response.json()
  return patients
}

export default function ComplexTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [patients, setPatients] = useState([])

  const columns = [
    columnHelper.accessor("id", {
      id: "id",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">ID</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("patientName", {
      id: "patientName",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("createdAt", {
      id: "date",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">DATE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("patientNationalID", {
      id: "patientNationalID",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">National ID</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("frequentSickness", {
      id: "frequentSickness",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Frequent Sickness</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("id", {
      id: "id_view",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Take action for full details</p>
      ),
      cell: (info) => (
        <Link to={`/admin/view-patients/${info.getValue()}`} state={info.row.original} className="w-fit text-sm bg-brand-500 rounded-md p-2 px-4 ml-6 text-white self-center">view patient</Link>
      ),
    }),
  ]; // eslint-disable-next-line

  useEffect(() => {
    getAllPatients().then(data => {
      setPatients(data)
    })
  }, [])

  const table = useReactTable({
    data: patients,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  
  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto mt-10"}>
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          All the Users
        </div>
        <CardMenu />
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 5)
              .map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="min-w-[150px] border-white/0 py-3  pr-4"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
