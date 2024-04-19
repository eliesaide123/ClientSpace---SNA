import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private location: Location) {    
    
  }

  HistoryMinus1() {
    this.location.back();
  }

}
