import { makeStyles } from "@material-ui/styles";
import React, { useRef, useContext, useEffect } from "react";
import { MapContext } from "../context/MapContext";
import SVG from "react-inlinesvg";
import KeyboardEventHandler from "react-keyboard-event-handler";
const svgPanZoom = require("svg-pan-zoom");

function Map() {
  // useRef References
  const svgEl = useRef(null);
  const {
    mapPanZoom,
    setMapPanZoom,
    focusRoot,
    setRoomLabel,
    setRoomDescription,
    setRoomFlag,
    svgPath,
  } = useContext(MapContext);

  // CSS
  const useStyles = makeStyles((theme) => ({
    map: {
      flex: 3,
      margin: 10,
      border: "8px black",
    },
    svg: {
      height: "100%",
      width: "100%",
    },
  }));

  // Placeholder
  const onError = (e) => {};

  // Placeholder
  const onLoad = (e) => {
    // Initialize SVG Pan Zoom
    const foo = svgPanZoom(svgEl.current, {
      zoomEnabled: true,
      dblClickZoomEnabled: false,
      preventMouseEventsDefault: false,
      // controlIconsEnabled: false,
    });
    foo.zoomAtPoint(1, { x: 447, y: 183 });
    setMapPanZoom(foo);
  };

  // According to W3C draft, the focus event is fired AFTER the previous element has fired the blur event
  // ****** Focus + Blur Fuctions (START) ******
  const onLayerFocus = (e) => {
    const layer = e.target;
    const { layerFlag } = layer.dataset;
    const roomLabelledBy = layer.getAttribute("aria-labelledby");
    const roomDescribedBy = layer.getAttribute("aria-describedby");
    const roomLabel = svgEl.current.getElementById(roomLabelledBy).textContent;
    const roomDescription =
      svgEl.current.getElementById(roomDescribedBy).textContent;
    setRoomLabel(roomLabel);
    setRoomDescription(roomDescription);
    setRoomFlag(layerFlag);
  };

  const onLayerBlur = (e) => {
    setRoomLabel(null);
    setRoomDescription(null);
    setRoomFlag(null);
  };
  // ****** Focus + Blur Fuctions (END) ******

  const classes = useStyles();

  return (
    <KeyboardEventHandler
      className={classes.map}
      handleKeys={["esc"]}
      onKeyEvent={focusRoot}
    >
      <SVG
        className={classes.svg}
        src={svgPath}
        onError={onError}
        onLoad={onLoad}
        innerRef={svgEl}
      />
    </KeyboardEventHandler>
  );
}

export default Map;
