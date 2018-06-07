import { Observable, Subscriber, merge } from "rxjs";
import { map, mapTo, pluck, tap, filter, first, take } from 'rxjs/operators'

const a$ = new Observable(subscriber => {
    setTimeout(() => {
        subscriber.next({ name: "yinsx01" })
    }, 1000)
})
const b$ = new Observable(subscriber => {
    setTimeout(() => {
        subscriber.next({ name: "yinsx02" })
    }, 1000)
})
const c$ = new Observable(subscriber => {
    setTimeout(() => {
        subscriber.next(2)
    }, 2000)
})
const m$ = merge(a$, b$, c$)

m$.pipe(
    pluck('name'),
    take(2),
    //map 拼接函数返回值
    map(v => v + ',map添加'),
    // //mapTo 拼接常量
    // mapTo(',mapTo 添加'),
    tap(v => console.log('窥探了',v)),
).subscribe(r => console.log(Date.now() + '::' + r))