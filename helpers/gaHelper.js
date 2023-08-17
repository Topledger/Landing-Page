import ReactGA from "react-ga4";

export function initGa({ trackingId }) {
  ReactGA.initialize([{ trackingId, gaOptions: {} }]);
}

export function pageView({ path, title }) {
  ReactGA.send({
    hitType: "pageview",
    page: path,
    title,
  });
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
  ReactGA.send({
    hitType: "event",
    ...(eventType[type] ?? eventType.default),
    ...data,
  });
}
