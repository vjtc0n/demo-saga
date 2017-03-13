/**
 * Created by vjtc0n on 3/10/17.
 */
// @flow
import React, { Component } from 'react';

export default class AppA extends Component {
  props: {
    children: HTMLElement
  };
  
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
