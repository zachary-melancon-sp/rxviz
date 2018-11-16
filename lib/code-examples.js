export default {
  combination: {
    name: 'Combination',
    childExamples: [
      {
        id: 'fork-join',
        name: 'Fork Join',
        code: `const { of, forkJoin } = Rx;
const { pipe, mergeMap } = RxOperators;

const myPromise = val =>
  new Promise(resolve =>
    setTimeout(() => resolve(\`\${val}\`), 2500)
  );

const source = of(['#', 'H', 'A', 'C', 'K', 'A', 'T', 'H', 'O', 'N', '2', '0', '1', '8']);
source.pipe(mergeMap(q => forkJoin(...q.map(myPromise))));`,
        timeWindow: 5000
      },
      {
        id: 'zip',
        name: 'Zip',
        code: `const { of, interval } = Rx;
const { zip, map } = RxOperators;

const timer$ = interval(1000);
const prefix$ = of('ASS', 'BUTT', 'FAT', 'BUST');
const suffix$ = of('umed', 'ercup', 'herhood', 'ed');

timer$.pipe(
  zip(
    prefix$,
    suffix$,
  ), map(([_, prefix, suffix]) => \`\${prefix}\${suffix}\`)
  )`,
        timeWindow: 5000
      }
    ]
  },
  conditional: {
    name: 'Conditional',
    childExamples: [
      {
        id: 'default-empty',
        name: 'Default Empty',
        code: `const { of, empty, Observable } = Rx;
const { defaultIfEmpty } = RxOperators;

Observable.create(observer => {
  let n = 1;
  let b = of('Power at 1.21gw, time machine at full capacity!').pipe(defaultIfEmpty('Power is below 1.21gw'))
  let a = empty().pipe(defaultIfEmpty('Uh oh, on empty! Switching to power reserve.'))
  let count = 1;
  const intervalId = setInterval((mil) => {
    console.log(mil)
    if(count <= 2) {
      if (count % 2 === 0) {
        observer.next(a);
        count++;
      } else {
        observer.next(b);
        count++;
      }
    }
  }, 1500);

  return () => clearInterval(intervalId);
})`,
        timeWindow: 5000
      },
      {
        id: 'every',
        name: 'Every',
        code: ``,
        timeWindow: 5000
      }
    ]
  },
  creation: {
    name: 'Creations',
    childExamples: [
      {
        id: 'create',
        name: 'Create',
        code: ``,
        timeWindow: 5000
      },
      {
        id: 'of',
        name: 'Of',
        code: ``,
        timeWindow: 5000
      }
    ]
  },
  'error-handling': {
    name: 'Error Handling',
    childExamples: [
      {
        id: 'catch-error',
        name: 'Catch Error',
        code: ``,
        timeWindow: 5000
      },
      {
        id: 'retry',
        name: 'Retry',
        code: ``,
        timeWindow: 5000
      }
    ]
  },
  multicasting: {
    name: 'Multicasting',
    childExamples: [
      {
        id: 'publish',
        name: 'Publish',
        code: ``,
        timeWindow: 5000
      },
      {
        id: 'multicast',
        name: 'Multicast',
        code: ``,
        timeWindow: 5000
      }
    ]
  },
  filtering: {
    name: 'Filtering',
    childExamples: [
      {
        id: 'debounce-time',
        name: 'Debounce Time',
        code: ``,
        timeWindow: 5000
      },
      {
        id: 'distinct-until-changed',
        name: 'Distinct Until Changed',
        code: ``,
        timeWindow: 5000
      }
    ]
  },
  transformation: {
    name: 'Transformation',
    childExamples: [
      {
        id: 'buffer',
        name: 'Buffer',
        code: ``,
        timeWindow: 5000
      },
      {
        id: 'map',
        name: 'Map',
        code: ``,
        timeWindow: 5000
      }
    ]
  },
  utility: {
    name: 'Utility',
    childExamples: [
      {
        id: 'tap',
        name: 'Tap',
        code: ``,
        timeWindow: 5000
      },
      {
        id: 'let',
        name: 'Let',
        code: ``,
        timeWindow: 5000
      }
    ]
  },
  recipes: {
    name: 'Recipes',
    childExamples: [
      {
        id: 'http-polling',
        name: 'HTTP Polling',
        code: ``,
        timeWindow: 5000
      },
      {
        id: 'game-loop',
        name: 'Game Loop',
        code: ``,
        timeWindow: 5000
      }
    ]
  },
  custom: {
    name: 'Custom',
    code: `// Write any JavaScript you want, just make sure that
               // the last expression is an Rx.Observable
               const {  } = Rx;
               const {  } = RxOperators;`,
    timeWindow: 10000
  }
};
