import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./InfoBox.css";

function InfoBox({ title, active, isRed, cases, total, darkMode, ...props }) {
  return (
    <div className="infoBox">
      <Card
        style={
          darkMode === true
            ? { backgroundColor: "pink", transition: "0.4s ease" }
            : { backgroundColor: "white", transition: "0.4s ease" }
        }
        onClick={props.onClick}
        className={`infoBox ${active && "infoBox--selected"} ${
          isRed && "infoBox--red"
        }`}
      >
        <CardContent>
          <Typography color="textSecondary">{title}</Typography>
          <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
            {cases}
          </h2>
          <Typography color="textSecondary" className="infoBox__total">
            {total} Total
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
