import { resolve } from "styled-jsx/css";

function wait(time = 0) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export async function fetchProgramDashboard(programName) {
  await wait(500);

  return {
    title: "Metaplex",
    subTitle: "7 days decoded instructions data.",
    general: [
      {
        id: 1,
        grid: {
          width: 1,
          height: 1,
        },
        type: "STATS",
        value: 490,
        change: 60,
        title: "new users this week",
        subTitle: "was 430 last week",
      },
      {
        id: 2,
        grid: {
          width: 1,
          height: 1,
        },
        type: "STATS",
        value: 1000,
        change: 200,
        title: "transactions this week",
        subTitle: "was 800 last week",
      },
      {
        id: 3,
        grid: {
          width: 2,
          height: 1,
        },
        type: "BAR_GRAPH",
        legend: "data a",
        xLabel: "Date",
        background: "#4383ff",
        data: [
          72, 67, 76, 75, 71, 66, 60, 77, 69, 93, 71, 63, 73, 92, 74, 79, 88,
          65, 71, 70,
        ],
      },
      {
        id: 4,
        grid: {
          width: 2,
          height: 1,
        },
        type: "BAR_GRAPH",
        legend: "data a",
        xLabel: "Date",
        background: "#42ae00",
        data: [
          72, 67, 76, 75, 71, 66, 60, 77, 69, 93, 71, 63, 73, 92, 74, 79, 88,
          65, 71, 70,
        ],
      },
      {
        id: 5,
        grid: {
          width: 2,
          height: 1,
        },
        type: "BAR_GRAPH",
        legend: "data a",
        xLabel: "Date",
        background: "#ff5146",
        data: [
          72, 67, 76, 75, 71, 66, 60, 77, 69, 93, 71, 63, 73, 92, 74, 79, 88,
          65, 71, 70,
        ],
      },
    ],
  };
}