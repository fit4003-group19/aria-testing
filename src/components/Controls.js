import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MapContext } from "../context/MapContext";
import useTestCases from "../hooks/useTestCases";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  attributes: {
    flex: 1,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "whitesmoke",
  },
  attribute: { flex: 4, margin: 10, stroke: "black", strokeWidth: 5 },
  buttons: {
    flex: 1,
    margin: 10,
    display: "flex",
    justify: "space-between",
    flexDirection: "row",
  },
}));

function Controls() {
  const classes = useStyles();
  const { mapPanZoom, setSvgPath } = useContext(MapContext);
  const { testCases, setTestCases } = useTestCases();

  const onTestCaseClick = (i) => {
    setTestCases(
      testCases.map((testCase, j) => {
        return {
          ...testCase,
          checked: i == j ? true : false,
        };
      })
    );
    setSvgPath(testCases[i].url);
  };

  return (
    <div className={classes.attributes}>
      <div className={classes.attribute}>
        <h1>Testing Harness</h1>
        {testCases.map((testCase, i) => {
          return (
            <>
              <div>
                <span
                  style={{
                    marginRight: "1rem",
                    color: testCase.checked ? "red" : "black",
                  }}
                >
                  {testCase.description}
                </span>
                <ButtonGroup
                  size="small"
                  aria-label="small button group"
                  variant="contained"
                >
                  <a
                    href={testCase.url}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Button>RAW SVG</Button>
                  </a>
                  <Button onClick={() => onTestCaseClick(i)}>Change</Button>
                </ButtonGroup>
              </div>
            </>
          );
        })}
      </div>
      <div className={classes.buttons}>
        {mapPanZoom && (
          <>
            <label>
              Zoom In
              <button onClick={() => mapPanZoom.zoomIn()}>+</button>
            </label>
            <label>
              Zoom Out
              <button onClick={() => mapPanZoom.zoomOut()}>-</button>
            </label>
            <label>
              Reset
              <button onClick={() => mapPanZoom.resetZoom()}>x</button>
            </label>
          </>
        )}
      </div>
    </div>
  );
}

export default Controls;
