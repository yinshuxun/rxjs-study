import Rx from 'rxjs/Rx'

const subject = new Rx.Subject

subject.subscribe(v => console.log(`this is titleA ${v}`))
subject.subscribe(v => console.log(`this is titleB ${v}`))

const obvervable = Rx.Observable.from([4,5,6])
obvervable.subscribe(subject)