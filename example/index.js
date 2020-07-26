const PromisedEvent = require('..');

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