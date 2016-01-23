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

export class Button extends React.Component {
  constructor(props) {
    super(props);
    // Add some state for the component.
    this.state = {
    };
  }

  /**
   * Add event handlers to the button here.
   */
  render() {
    return (
      <button
        className={styles['button']} // PostCSS modules.
      >
        {this.props.children}
      </button>
    );
  }
}
