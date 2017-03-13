/**
 * Created by vjtc0n on 3/10/17.
 */
// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './componentA.css';


export default class ComponentA extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
        </div>
      </div>
    );
  }
}
