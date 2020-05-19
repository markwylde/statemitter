# Statemitter
A library for observing when state changes

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
