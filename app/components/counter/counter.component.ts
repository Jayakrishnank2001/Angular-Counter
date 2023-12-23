import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset,rename } from '../../state/app.actions';
import { counterModel } from '../../state/app.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {

  counterDisplay!:number
  counter$!:Observable<counterModel>
  constructor(private store:Store<{counter:counterModel}>){}

  
  ngOnInit(): void {
    this.counter$=this.store.select('counter')
  }

  
  increment(){
    this.store.dispatch(increment())
  }
  
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }
  rename(){
    this.store.dispatch(rename({counterName:'Welcome to Mathematical Counter'}))
  }
}
