/*
import greet from './greet.json';

export default function(){
  var greeter = document.createElement('div');
  greeter.textContent = greet.text;
  return greeter;
}
*/

import React, {Component} from 'react';
import greet from './greet.json';

import styles from './Greeter.css';
class Greeter extends Component{
  render(){
    return(
      <div className={styles.root}>{greet.text}</div>
    );
  }
}

export default Greeter;