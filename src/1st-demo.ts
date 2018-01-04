import Rx from 'rxjs/Rx'
const button = document.getElementsByTagName('button')

Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .map(event => event.clientX)
    .scan((count, clientX) => count + clientX, 0)
    .subscribe(count => console.log(count))