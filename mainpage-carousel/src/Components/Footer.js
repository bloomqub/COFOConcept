import React, { Component } from 'react'
import Picture from "../Images/The CoFo Concept.png"

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="image-container">
            <img src={Picture} alt="LogoPicture"/>
        </div>
        <div className="footer-text">
            <h1>Footer</h1>
        </div>
        </div>
    )
  }
}
