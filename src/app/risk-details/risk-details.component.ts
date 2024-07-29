import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risk-details',
  templateUrl: './risk-details.component.html',
  styleUrl: './risk-details.component.css'
})
export class RiskDetailsComponent implements OnInit {

  Title: string;

  constructor() {}

  ngOnInit() {
      this.Title = "Risk Details"
  }


}
