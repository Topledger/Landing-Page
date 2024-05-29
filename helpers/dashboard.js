import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://admin.topledger.xyz/api",
});

/**
 * @param {Function} getValue
 * @param {'asc' | 'desc'} sortOrder
 * @returns
 */
export const dashboardSorter =
  (getValue, sortOrder = "asc") =>
  (dashboard1, dashboard2) =>
    (sortOrder === "desc" ? -1 : 1) *
    (getValue(dashboard1) - getValue(dashboard2));

export const getCreationDate = (dashboard) =>
  new Date(dashboard?.attributes?.createdAt).getTime();

export const getAllDashboards = async () => {
  try {
    const { data: dashboards } = await axiosInstance.get("/dashboards");
  } catch (err) {
    console.error(err); 
    return { data: [] };
  }

  return dashboards;
};
