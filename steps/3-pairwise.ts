import { interval } from 'rxjs';
import { map, pairwise, startWith, take } from 'rxjs/operators';

export const $pairwiseObservable = interval(1000)
.pipe(
  map(m=>Math.round(m/3)),
  //startWith(null),
  pairwise(), 
  take(10),
  //map(([oldFormValue, newFormValue]) => oldFormValue ==newFormValue)
  );
