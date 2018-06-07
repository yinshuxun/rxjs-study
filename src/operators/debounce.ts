import { source$ } from './util';
import { debounceTime, debounce } from 'rxjs/operators';
import { timer } from 'rxjs';

source$.pipe(
    debounceTime(500),
    debounce(() => timer(900))
).subscribe(s => console.log(s))