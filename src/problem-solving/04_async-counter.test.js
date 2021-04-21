import { count } from './04_async-counter.js';

const ms = 100;

function testCount({ startCount, endCount, done, cancelAfter }) {
    const start = Date.now();
    let doneTimeout = null;
    let cancel = null;
    let isDone = false;
    const finish = (error) => {
      if (isDone) return;
      isDone = true;
      done(error);
    };
    const triggerFinish = () => {
        doneTimeout = setTimeout(() => {
            finish();
        }, 500);
    }
    const callback = (count) => {
        try {
          const timeDiff = Date.now() - start;
          const run = count - startCount + 1;
          const bottomBorder = run * ms;
          const topBoard = bottomBorder + 10 * run;
          expect(timeDiff).toBeGreaterThanOrEqual(bottomBorder);
          expect(timeDiff).toBeLessThanOrEqual(topBoard);
          if (doneTimeout) {
              clearTimeout(doneTimeout);
              expect('Never to reach this point').toEqual('Callback called after end');
              return;
          }
          if (cancelAfter) {
              expect(count).toBeLessThanOrEqual(cancelAfter);
          }
          if (count === endCount) {
              triggerFinish();
              return;
          }
          if (cancelAfter && cancelAfter === count) {
            expect(cancel).toBeInstanceOf(Function);
            cancel();
            triggerFinish();
          }
        } catch (error) {
            finish(error);
        }
    }
    cancel = count(startCount, endCount, callback);
}

describe('counter', () => {
    it('should count from start number to end number, one per 1/10th of a second by calling the callback', (done) => {
        testCount({ startCount: 1, endCount: 5, done });
    });

    it('should provide a method to cancel the counting', function (done) {
        testCount({ startCount: 1, endCount: 5, done, cancelAfter: 3 });
    });
});