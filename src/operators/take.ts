import { from, interval } from 'rxjs';
import { pluck, tap, takeUntil, filter } from 'rxjs/operators';

const source = interval(1000)
let index = 0
source.pipe(
    takeUntil(
        source.pipe(
            filter(v => v > 5)
        )
    )
).subscribe(v => {
    console.log("read", v)
})