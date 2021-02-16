'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunc = compare) {
    let changesCounter;

    do {
      changesCounter = 0;

      for (let i = 1; i < this.length; i++) {
        const prevStr = this[i - 1];
        const nextStr = this[i];

        if (compareFunc(prevStr, nextStr) > 0) {
          changesCounter++;
          this[i - 1] = nextStr;
          this[i] = prevStr;
        }
      }
    } while (changesCounter > 0);

    return this;
  };

  const compare = (a, b) => {
    const prevString = String(a);
    const nextString = String(b);

    if (prevString < nextString) {
      return -1;
    }

    if (prevString > nextString) {
      return 1;
    }

    return 0;
  };
}

module.exports = applyCustomSort;
