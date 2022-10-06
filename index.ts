import * as steps from './steps';



const $intervalObservable=steps.$intervalObservable
  .subscribe(console.log);
  $intervalObservable.unsubscribe();
