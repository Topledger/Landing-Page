import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

export function useSearchParams() {
  const router = useRouter();
  const [params, setParams] = useState(
    new URLSearchParams(
      (typeof window === "undefined" ? {} : window)?.location?.search
    )
  );
  console.log("router.asPath", router.asPath);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setParams(new URLSearchParams(url.split("?")[1]));
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return params;
}

export function useSearchObject() {
  const params = useSearchParams();

  return useMemo(() => {
    return Object.fromEntries(params.entries());
  }, [params]);
}

const ALLOWED_CHARS = /^[a-z0-9\s\-]$/;
export const getId = (text) => {
  return text
    ?.toLowerCase()
    .replace(/./g, (c) => (ALLOWED_CHARS.test(c) ? c : ""))
    .replace(/\s+/g, "-");
};
