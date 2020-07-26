/**
 * Thanks to Oliver Foster for the Promise extension pattern!
 * https://gist.github.com/oliverfoster/00897f4552cef64653ef14d8b26338a6
 */

const EventEmitter = require('events');

/**
 * Create a promise that a future event will happen. Fire with
 * `FutureEvent.ready()`.
 */
module.exports = class FutureEvent extends Promise {
  constructor(def = (res, rej)=>{}) {
    let res, rej;
    super((resolve, reject) => {
      def(resolve, reject);
      res = resolve;
      rej = reject;
    });

    this.resolve = res;
    this.reject = rej;
  }

  ready() {
    this.resolve();
  }

  cancel() {
    this.reject();
  }
}