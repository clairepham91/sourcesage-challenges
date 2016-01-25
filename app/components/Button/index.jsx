/**
 * Copyright 2015-present, SourceSage Co.
 *
 * Challenge 0 (Expected time to complete: ?? hours):
 *
 * Try to pick up React, ES6, jsx, etc as quickly as you can, and as much needed to complete the tasks below.
 *
 * Challenge 1 (Expected time to complete: < 1 minute):
 *
 * Change the default text in the button to "Follow SourceSage".
 *
 * Challenge 2 (Expected time to complete: < 1 minute):
 *
 * Add an event handler to the button, which on click, toggles the state of the button text between "Follow SourceSage", and "Following SourceSage".
 *
 * Bonus Challenge:
 *
 * This is the creative portion!
 *
 * Do anything! Impress us!
 *
 * You could make the button prettier, refactor the code, add some layout, demonstrate to us what you know.
 *
 */

import React from 'react';
import styles from './styles.css';
import { Icon } from '../Icon';

//ES6 Classes no autobinding
export class Button extends React.Component {
  constructor(props) {
    super(props);
    // Add some state for the component.
    
    this.state = {
      follow : false,
      hover: false
    };
  }

  handleClick() {
    var currState = this.state.follow
    this.setState({follow: !currState});
  }
  mouseOver () {
    this.setState({hover: true});
  }

  mouseOut () {
    this.setState({hover: false});
  }

  /**
   * Add event handlers to the button here.
   */
  render() {
    var btnText, btnColor;
    if (this.state.follow) {
      if (this.state.hover) {
        btnText = "Unfollow SourceSage";
        btnColor = {"background": "#A30000", "color": "white"}
      } else {
        btnText = "Following SourceSage";
        btnColor = {"background": "#55acee", "color": "white"}
      } 
    } else {
      btnText = "Follow SourceSage";
    }
    
    return (
      <button onClick={this.handleClick.bind(this)} 
      onMouseOver={this.mouseOver.bind(this)}
      onMouseOut={this.mouseOut.bind(this)}
      className={styles['button']} // PostCSS modules.
      style={btnColor}
      >
        <span>
          {this.state.follow ? null : (<Icon icon="person-add" />)}
        </span>
        <span>{btnText}</span>
      </button>
    );
  }
}





