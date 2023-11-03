import Card from "src/components/card";
import BarChart from "src/components/charts/BarChart";
import { MdBarChart } from "react-icons/md";
import { FC } from "react";
import { formatTime } from "src/utils";

const TemperatureRecords: FC<{ patientStats: PatientStat[] }> = ({ patientStats }) => {
  const barChartOptionsTemperatureRecords = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        backgroundColor: "#000000",
      },
      theme: "dark",
      onDatasetHover: {
        style: {
          fontSize: "12px",
        },
      },
    },
    xaxis: {
      categories: patientStats.map(ps => {
        return formatTime(ps.createdAt)
      }),
      show: false,
      labels: {
        show: true,
        style: {
          colors: "#66CDAA",
          fontSize: "14px",
          fontWeight: "500",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      color: "black",
      labels: {
        show: false,
        style: {
          colors: "#66CDAA",
          fontSize: "14px",
          fontWeight: "500",
        },
      },
    },

    grid: {
      borderColor: "rgba(163, 174, 208, 0.2)",
      show: true,
      yaxis: {
        lines: {
          show: false,
          opacity: 0.5,
        },
      },
      row: {
        opacity: 0.5,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 70, 90]
      }
    },
    legend: {
      show: false,
    },
    colors: ["#5E37FF", "#9370DB", "#E1E9F8"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "20px",
      },
    },
  };

  const barChartDataTemperatureRecords = [
    {
      name: "Temperature",
      data: patientStats.map(ps => {
        return ps.bodyTemperature
      }),
      color: "#ADD8E6",
    }
  ];

  return (
    <Card extra="h-full flex flex-col items-start justify-between bg-white w-full rounded-3xl py-6 px-2 text-center bg-brand-400">
      <div className="w-full flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white">
          Temperature records (day)
        </h2>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="h-full w-full">
        <BarChart
          chartData={barChartDataTemperatureRecords}
          chartOptions={barChartOptionsTemperatureRecords}
        />
      </div>
    </Card>
  );
};

export default TemperatureRecords;
