import { FC, useState } from "react";
import Card from "src/components/card";

const General: FC<{ patientInfo: PatientInfo }> = ({ patientInfo }) => {
  const { patientName, patientNationalID, frequentSickness } = patientInfo

  return (
    <Card extra={"w-full h-fit p-3 mb-3"}>
      {/* Header */}
      <h4 className="px-2 text-lg font-medium text-gray-700 dark:text-white self-center font-logo">
        Other Information
      </h4>
      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 px-2">
        <div className="flex flex-col items-start justify-center rounded-md bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none ring-1 ring-gray-100">
          <p className="text-sm text-gray-600">Patient Name</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {patientName}
          </p>
        </div>
        <div className="flex flex-col items-start justify-center rounded-md bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none ring-1 ring-gray-100">
          <p className="text-sm text-gray-600">Patient National Id</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {patientNationalID}
          </p>
        </div>
        <div className="flex flex-col items-start justify-center rounded-md bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none ring-1 ring-gray-100">
          <p className="text-sm text-gray-600">frequent sickness</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {frequentSickness}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default General;
