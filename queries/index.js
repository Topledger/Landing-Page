import axios from "axios";
import { SYSTEM_PROGRAM_ADDRESS, TLAI_API_KEY } from "constants/constants";

function wait(time = 0) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export async function fetchProgramDashboard(programName) {
  // await wait(1000);

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
          width: 3,
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
          width: 3,
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
          width: 3,
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

export const queryToRows = (queryResult) => {
  const { data } = queryResult;
  const { columns, rows } = data;

  return rows.map((row) => {
    return columns.reduce(
      (obj, col) => ({
        ...obj,
        [col.name]: row[col.name],
      }),
      {}
    );
  });
};

export const fetchProgramList = async () => {
  const response = await axios.get(
    "https://analytics.topledger.xyz/tl/api/queries/4036/results.json?api_key=c02tliT9W5qpU5Yug42thLOJBtKcveEX8hIamwE5"
  );

  return queryToRows(response.data.query_result);
};

const APP_SCRIPT_ID =
  "AKfycbzLroq5USlpyn2pC-UNm_1GdeVw6O20QfIPHXD8Ai4WmZShq9_VvlgpoN5X-KKXgvBM";

export const postFeedback = async (formData, scriptId = APP_SCRIPT_ID) => {
  const qs = new URLSearchParams();
  for (const key in formData) {
    qs.set(key, formData[key]);
  }

  const response = await axios.post(
    `https://script.google.com/macros/s/${scriptId}/exec`,
    qs.toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  console.log("form response", response.data);
};

export const fetchAddressInfo = async ({ address }) => {
  const data = {
    jsonrpc: "2.0",
    id: 1,
    method: "getAccountInfo",
    params: [
      address,
      {
        encoding: "jsonParsed",
      },
    ],
  };
  const response = await axios.post(
    "https://external-api.topledger.xyz/",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: false,
    }
  );
  const result = response?.data?.result || {};
  const type = result?.value?.data?.parsed?.type;
  const info = result?.value?.data?.parsed?.info;
  return {
    isProgram: type === "program",
    isToken: type === "mint" || (type === "account" && info?.mint),
    isWallet: result?.value?.owner === SYSTEM_PROGRAM_ADDRESS,
  };
};

export const nlToSql = async (query) => {
  const params = {
    data_source_id: 108,
    natural_language_text: query,
    api_key: TLAI_API_KEY,
  };
  const res = await axios.get(
    "https://analytics.topledger.xyz/tlai/api/nl-to-sql",
    {
      params,
    }
  );
  const data = res.data;

  const path = data?.embed_path;

  if (path) {
    return `https://analytics.topledger.xyz${path}`;
  } else {
    return null;
  }
};
