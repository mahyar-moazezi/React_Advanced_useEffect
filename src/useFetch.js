import React from "react";
import { useEffect, useState } from "react/cjs/react.production.min";

export const useFetch = (options) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(options.url)
      .then((response) => response.json())
      .then((json) => setData(json));
  },[options.url]);
  return data;
};
