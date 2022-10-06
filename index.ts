import * as steps from './steps';

const sub=steps.$pairwiseObservable
  .subscribe(console.log);
sub.unsubscribe();