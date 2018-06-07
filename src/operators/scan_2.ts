import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

const subject = new Subject();
// scan 示例，随着时间的推移构建对象
const example = subject.pipe(
  scan((acc, curr) => Object.assign({}, acc, curr), {})
);
// 输出累加值
const subscribe = example.subscribe(val =>
  console.log('Accumulated object:', val)
);
// subject 发出的值会被添加成对象的属性
// {name: 'Joe'}
subject.next({ name: 'Joe' });
// {name: 'Joe', age: 30}
subject.next({ age: 30 });
// {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
subject.next({ favoriteLanguage: 'JavaScript' });
