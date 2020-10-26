import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTheme } from 'rendition';
import LoadingBar from "react-top-loading-bar";

export const Loading = () => {
  const theme = useTheme();
  const ref = useRef(null)
  const isLoading = useSelector((state) => state.sessionReducer.loading)

  useEffect(() => {
    if (isLoading) ref.current.continuousStart()
    else ref.current.complete()
  }, [isLoading]);


  return <LoadingBar color={theme.app.loading || "#232323"} ref={ref} />;
};
