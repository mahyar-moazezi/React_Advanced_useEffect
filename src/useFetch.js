import { useEffect, useState, useRef, useLayoutEffect } from "react";
const useCallbackRef = (callback) => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return callbackRef;
};
export const useFetch = (options) => {
  const [data, setData] = useState(null);
  const savedOnSuccess = useCallbackRef(options.onSuccess);

  useEffect(() => {
    console.log("useFetch useEffect");
    if (options.url) {
      let isCanceled = false;
      fetch(options.url)
        .then((response) => response.json())
        .then((json) => {
          if (!isCanceled) {
            savedOnSuccess.current?.(json);
            setData(json);
          }
        });
      return () => {
        isCanceled = true;
      };
    }
  }, [options.url]);
  return { data };
};
