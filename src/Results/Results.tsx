import React from "react";
import Card from "../Card/Card";
import "./Results.css";

export default class Results extends React.Component{
  render(): React.ReactNode {
    return(
      <section className="Results">
        <Card></Card>
      </section>
    )
  }
}