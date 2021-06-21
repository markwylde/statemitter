# Statemitter
A library for observing when state changes

## Installation
```
npm i --save statemitter
```

## Example
```javascript
const {createState, setState} = require('statemitter');

const state = createState({
  number: 1
});

setState(state, {
  number: state.number + 1;
});

state.on('change', function () {
  console.log('state has changed');
});
```

## Developing
```
git clone https://github.com/markwylde/statemitter.git
cd statemitter
npm install
npm run start
```

Then visit:

http://localhost:8080
