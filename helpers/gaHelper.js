import ReactGA from "react-ga4";

export function initGa({ trackingId }) {
  ReactGA.initialize([{ trackingId, gaOptions: {} }]);
}

const eventType = {
  dashboard: {
    category: "dashboard",
    action: "view dashboard",
    label: "View Program Statistics",
  },
  default: {
    category: "custom",
    action: "",
  },
};

export function sendEvent(type, data = {}) {
  setTimeout(() => {
    ReactGA.gtag("event", "view_dashboard", {
      hitType: "event",
      ...(eventType[type] ?? eventType.default),
      ...data,
    });
  }, 0);
}
