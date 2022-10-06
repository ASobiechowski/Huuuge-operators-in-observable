import { interval } from 'rxjs';
import { pairwise, take } from 'rxjs/operators';

//Returns: [0,1], [1,2], [2,3], [3,4], [4,5]
export const $pairwiseObservable = interval(1000)
.pipe(
  pairwise(), 
  take(5)
  );
