import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

const source = of(1, 2, 3, 4);
const example = source.pipe(reduce((acc, val) => acc + val));
// 输出: Sum: 10'
const subscribe = example.subscribe(val => console.log('Sum:', val));
