import { FC } from "react";
import {
  MdOutlineCalendarToday,
  MdBarChart,
} from "react-icons/md";
import Card from "src/components/card";
import LineChart from "src/components/charts/LineChart";
import { formatTime } from "src/utils";

const AllMeasurements: FC<{ patientStats: PatientStat[] }> = ({ patientStats }) => {
  const chartData = [
    {
      name: "Heart Beat",
      data: patientStats.map(pt => {
        return pt.heartRate
      }),
      color: "#ADD8E6",
    },
    {
      name: "Temperature",
      data: patientStats.map(pt => {
        return pt.bodyTemperature
      }),
      color: "#9370DB",
    },
  ];

  const chartOptions = {
    legend: {
      show: false,
    },

    theme: {
      mode: "light",
    },
    chart: {
      type: "area",

      toolbar: {
        show: false,
      },
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    tooltip: {
      style: {
        fontSize: "12px",
        backgroundColor: "#000000",
      },
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        style: {
          colors: "#66CDAA",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "text",
      categories: patientStats.map(pt => {
        return formatTime(pt.createdAt)
      }),
    },

    yaxis: {
      show: true,
    },
  };

  return (
    <Card extra="!p-[20px] text-center col-span-2 h-full">
      <div className="flex justify-between">
        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
          <MdOutlineCalendarToday />
          <span className="text-sm font-medium text-gray-600">This month's Health stats</span>
        </button>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="flex h-full w-full justify-between 2xl:overflow-hidden">
        <LineChart
          chartOptions={chartOptions}
          chartData={chartData}
        />
      </div>
    </Card>
  );
};

export default AllMeasurements;
