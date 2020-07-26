# PromisedEvent
A simple, tiny utility class for promising a future event will occur, allowing you to
`await` it. For instance:

```javascript
async function test() {
  /** Promise an event will happen eventually. */
  const inFiveSeconds = new PromisedEvent();

  /** Fire PromisedEvent.ready() after 5s. */
  setTimeout(() => inFiveSeconds.ready(), 5e3);
  
  console.log('⏱️  Waiting for event...');
  await inFiveSeconds;
  console.log('✅  Done!');
}

test();
```

Will print `⏱️  Waiting for event...`, wait 5 seconds until the event fires
(non-blocking), and then print `✅  Done!`  (Run yourself with `node example/` 
in the root directory.)