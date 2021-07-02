# Statemitter
A library for observing when state changes.

## Installation
```
npm i --save statemitter
```

## Example
```javascript
const statemitter = require('statemitter');

const [state, applyState, subscribeState] = statemitter({
  number: 1
});

applyState({
  number: state.number + 1;
});

const unsubscribe = subscribe(function () {
  console.log('state has changed');
});

setTimeout(() => {
  unsubscribe()
}, 500);
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
