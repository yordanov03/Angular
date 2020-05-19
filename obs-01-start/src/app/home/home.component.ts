import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  firstObsSubscription: Subscription;

  constructor() { }
 

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count)=>{
    //   console.log(count);
    // })

    const customObservable = Observable.create(observer =>{
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if (count===5) {
          observer.complete();
        }

        if(count>3){
          observer.error(new Error('Greater than 3'));
        }
        count++
      }, 1000)
    });

    

    this.firstObsSubscription = customObservable.subscribe(data=>{
      console.log(data)},
      error=>{
        console.log(error);
        alert(error.message);
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }


}
