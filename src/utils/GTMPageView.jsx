import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GTMPageView = () => {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

export default GTMPageView;
