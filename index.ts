import * as steps from './steps';



const $intervalObservable=steps.$intervalObservable
  .subscribe(console.log);
  $intervalObservable.unsubscribe();

  const $takeObservable=steps.$takeObservable
  .subscribe(console.log);
  $takeObservable.unsubscribe();

const $pairwiseObservable=steps.$pairwiseObservable
  .subscribe(console.log);
  $pairwiseObservable.unsubscribe();