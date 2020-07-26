const EventEmitter = require('events');

module.exports = class PromisedEvent {
  constructor() {
    this.eventEmitter = new EventEmitter();
    this.promise = new Promise((resolve, reject) => {
      this.eventEmitter.on('ready', resolve);
      this.eventEmitter.on('cancel', reject);
    });
  }

  ready() {
    this.eventEmitter.emit('ready');
  }

  cancel() {
    this.eventEmitter.emit('cancel');
  }
}