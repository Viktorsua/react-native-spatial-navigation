/* eslint-disable react/no-multi-comp */
import React from "react";
import SpatialNavigation from "./spatialNavigation";
import LayoutFocusable from "./layout";

SpatialNavigation.init({
  debug: false,
  visualDebug: false,
});

const App = () => <LayoutFocusable focusable={false} />;

export default App;
