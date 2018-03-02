import { Component } from '@angular/core';
import {  trigger, state, style, transition, animate, keyframes  } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('menuOp',[
      state('inactive', style({
        height: "2px"
      })),
      state('active', style({
        height: "320px"
      })),
      transition('inactive <=> active', animate('0.5s ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  state: string;
  state2: string;
  constructor(){
    this.state = 'inactive';
    this.state2 = 'inactive';
  }
  openMenu() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }


}
