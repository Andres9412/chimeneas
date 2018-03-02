import { Component, OnInit } from '@angular/core';
import {  trigger, state, style, transition, animate, keyframes  } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('menuOp',[
      state('inactive', style({
        opacity: "0"
      })),
      state('active', style({
        opacity: "1"
      })),
      transition('inactive <=> active', animate('0.8s ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  state: string;
  state2: string;
  state3: string;
  state4: string;

  constructor() {
    this.state = 'inactive';
    this.state2 = 'inactive';
    this.state3 = 'inactive';
    this.state4 = 'inactive';
   }

  ngOnInit() {

  }
  onAppear(){
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
  onAppear2(){
    this.state2 = (this.state2 === 'inactive' ? 'active' : 'inactive');
  }
  onAppear3(){
    this.state3 = (this.state3 === 'inactive' ? 'active' : 'inactive');
  }
  onAppear4(){
    this.state4 = (this.state4 === 'inactive' ? 'active' : 'inactive');
  }
}
