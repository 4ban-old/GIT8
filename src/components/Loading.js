import React, { useState } from "react";
import { withTheme } from "styled-components";
import LoadingBar from "react-top-loading-bar";

const Loading = (props) => {
  // TODO will watch for isFetching var in redux and show the progress bar
  const [progress, setProgress] = useState(50);

  return (
    <LoadingBar
      color={props.theme.loading || "#232323"}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
      shadow={true}
    />
  );
};

export default withTheme(Loading);

// import React, { useRef } from 'react'
// import LoadingBar from 'react-top-loading-bar'

// const App = () => {
//   const ref = useRef(null)

//   return (
//     <div>
//       <LoadingBar color='#f11946' ref={ref} />
//       <button onClick={() => ref.current.continuousStart()}>
//         Start Continuous Loading Bar
//       </button>
//       <button onClick={() => ref.current.staticStart()}>
//         Start Static Loading Bar
//       </button>
//       <button onClick={() => ref.current.complete()}>Complete</button>
//       <br />
//     </div>
//   )
// }

// export default App
