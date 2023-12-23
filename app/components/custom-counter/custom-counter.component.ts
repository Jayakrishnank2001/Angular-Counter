import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customCounter } from '../../state/app.actions';
import { counterModel } from '../../state/app.model';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.css'
})
export class CustomCounterComponent {

  counterName=''
  constructor(private store:Store<{counter:counterModel}>){

  }

  counterInput!:number
  actionType='add'

  OnIncrement(){
    this.store.dispatch(customCounter({value:+this.counterInput,action:this.actionType}))
  }
}


