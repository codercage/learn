/*
import greeter from './Greeter';
document.getElementById('root').appendChild(greeter());


//命令行使用:
//webpack app/main.js public/bundle.js
*/

import React from 'react';
import {render} from 'react-dom';
//import Greeter from './Greeter';
import Greeter from './Hreeter';

import './main.css';

render(<Greeter />, document.getElementById('root'));


//import Greeter from './Greeter.css'
// import screenShot from '../vendors/html2canvas.min.js'
// document.getElementById('root').setAttribute('class', Greeter.root);
// var html2canvas = screenShot(document.body, {
//   onrendered: function(canvas) {
//     document.body.appendChild(canvas);
//   }
// });