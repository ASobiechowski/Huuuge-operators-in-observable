import { interval } from 'rxjs';
import { pairwise, startWith, take } from 'rxjs/operators';

export const $pairwiseStartWithObservable = interval(1000)
.pipe(
  
  take(5),
  //startWith(122),
  pairwise(), 
  );
