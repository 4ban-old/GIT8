import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { withTheme } from "styled-components";
import LoadingBar from "react-top-loading-bar";

const Loading = (props) => {
  const ref = useRef(null)
  const isLoading = useSelector((state) => state.loadingReducer.loading)

  useEffect(() => {
    if (isLoading) ref.current.continuousStart()
    else ref.current.complete()
  }, [isLoading]);


  return <LoadingBar color={props.theme.loading || "#232323"} ref={ref} />;
};

export default withTheme(Loading);