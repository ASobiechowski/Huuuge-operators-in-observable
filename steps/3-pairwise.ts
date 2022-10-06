import { interval } from 'rxjs';
import { pairwise, take } from 'rxjs/operators';

export const $pairwiseObservable = interval(1000)
.pipe(
  pairwise(), 
  take(5)
  );
