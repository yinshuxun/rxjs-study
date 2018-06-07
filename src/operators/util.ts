import { Observable, merge } from "rxjs";

const a$ = new Observable(subscriber => {
    setTimeout(() => {
        subscriber.next({ name: "yinsx01" })
    }, 1000)
})
const b$ = new Observable(subscriber => {
    setTimeout(() => {
        subscriber.next({ name: "yinsx02" })
    }, 500)
})
const c$ = new Observable(subscriber => {
    setTimeout(() => {
        subscriber.next({ name: "yinsx03" })
    }, 2000)
})
const d$ = new Observable(subscriber => {
    subscriber.next({ name: "yinsx00" })
})
const m$ = merge(a$, b$, c$, d$)

export const source$ = m$