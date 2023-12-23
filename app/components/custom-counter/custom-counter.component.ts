import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customCounter } from '../../state/app.actions';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.css'
})
export class CustomCounterComponent {

  constructor(private store:Store<{counter:number}>){

  }

  counterInput!:number
  actionType!:string

  OnIncrement(){
    this.store.dispatch(customCounter({value:+this.counterInput,action:this.actionType}))
  }
}


