import {
  MdBarChart,
} from "react-icons/md";
import Card from "src/components/card";
import {
  lineChartDataHeartBeatRate,
  lineChartOptionsHeartBeat,
} from "src/variables/charts";
import LineChart from "src/components/charts/LineChart";
import { FC } from "react";
import { formatTime } from "src/utils";

const HeartBeat: FC<{ patientStats: PatientStat[] }> = ({ patientStats }) => {
  const chartData = [
    {
      name: "Heart Beat",
      data: patientStats.map(pt => {
        return pt.heartRate
      }),
      color: "#ADD8E6",
    }
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
    <Card extra="!p-[20px] w-full h-full flex-col !justify-between col-span-2 text-center !bg-violet-500">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white">
          Heart Beat records (day)
        </h2>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="h-full w-full flex justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <LineChart
          chartOptions={chartOptions}
          chartData={chartData}
        />
      </div>
    </Card>
  );
};

export default HeartBeat;
