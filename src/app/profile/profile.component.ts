import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { profileService } from './service/profile.service';
import { tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { authSelector } from '../login/store/selectors/auth.selector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  credentials: object | undefined

  constructor(private location: Location, private profileSer: profileService, private store: Store) {

  }

  ngOnInit() {

    debugger
    // this.store.select(authSelector).subscribe(cred => {      
    //   console.log(cred)
    // })
  }

  HistoryMinus1() {
    this.location.back();
  }
}


/*
{
    "userAccount": {
        "username": "a.khoury",
        "password": "gilxjiaiDjidiaFF",
        "email": "a.khoury@dq.com.lb",
        "mobile": "+9613839384",
        "userLang": 0,
        "contactScenario": "",
        "regType": "",
        "question": "q",
        "answer": "a"
    },
    "questions": [
        "What is your Mother’s maiden name?",
        "What is the name of your hometown?",
        "What is your favorite color?",
        "What is your first car color?",
        "Other Question..."
    ]
}
*/