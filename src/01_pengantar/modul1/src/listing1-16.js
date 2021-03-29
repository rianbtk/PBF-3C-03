// Contents of fantastic.js
export let render = function() {
    console.log("Hello from fantastic.render()!")
}

// Contents of script.js
import * as fantastic from './fantastic.js';
import * as wonderful from './wonderful.js';
import * as amazing from './amazing.js';

fantastic.render();
wonderful.render();
amazing.render();