import { interval } from "rxjs";
import {take } from 'rxjs/operators';


export const $takeObservable = interval(1000).pipe(
  take(5));