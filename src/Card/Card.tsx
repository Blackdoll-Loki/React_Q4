import React from "react";
import "./Card.css"

export default class Card extends React.Component{
  render(): React.ReactNode {
    return(
      <div className="Card">
        <h2>name: Luke Skywalker</h2>
        <p>hair color: blond</p>
        <p>skin color: fair</p>
        <p>eye color: blue</p>
        <p>gender: male</p>
      </div>
    )
  }
}