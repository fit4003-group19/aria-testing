import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Map from "./components/Map";
import Controls from "./components/Controls";
import MapProvider from "./context/MapContext";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "90vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
}));

function App() {
  const classes = useStyles();
  const flexBoxClasses = useStyles();

  return (
    <MapProvider>
      <div className={flexBoxClasses.root}>
        <Map />
        <Controls />
      </div>
    </MapProvider>
  );
}

export default App;
