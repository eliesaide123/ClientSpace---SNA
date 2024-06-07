import { Component, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { profileService } from './service/profile.service';
import { Store } from '@ngrx/store';
import { getUserSelector } from './store/selectors/getUser.selector';
import { GetUserResponse } from '../shared/models/GetUserResponse';
import { AuthResponse } from '../shared/models/AuthResponse';
import { getUserAction } from './store/actions';
import { login } from '../login/store/actions/auth.actions';
import { authSelector } from '../login/store/selectors/auth.selector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  getCredentials: AuthResponse | null = null;
  username: string;
  mobile: string;
  question: string;
  otherQuestion: string;
  answer: string;
  email: string;
  questions: string[] = [];
  index: number;
  selectedIndex: number | null = null;

  constructor(private location: Location, private profileSer: profileService, private store: Store) { }

  ngOnInit() {
    // this.pouchdbService.getLatestUser()
    //   .then((doc) => {
    //     if (doc) { // Check if doc is not undefined
    //       const authResponse: AuthResponse = doc.response; // Directly cast to AuthResponse
    //       this.store.dispatch(login({ AuthResponse: authResponse }));
    //     } else {
    //       console.error('No document found in PouchDB');
    //     }
    //   })
    //   .catch(err => {
    //     console.error('Error fetching data from PouchDB', err);
    //   });

    this.store.select(authSelector).subscribe(authResponse => {
      this.getCredentials = authResponse;
      if (this.getCredentials) {
        this.profileSer.getUserAccount(this.getCredentials.credentials).subscribe(res => {
          this.username = res.userAccount.username;
          this.mobile = res.userAccount.mobile;
          this.otherQuestion = res.userAccount.question;
          this.answer = res.userAccount.answer;
          this.email = res.userAccount.email;
          this.questions = res.questions

          debugger

          if (!this.questions.includes(this.question)) {
            this.question = this.questions[this.questions.length - 1]
            this.index = this.questions.indexOf(this.question)
            debugger;
          }
          const event = {target: {selectedIndex: this.index}} as unknown as Event;

          this.onQuestionChange(event);
        });
      }
    });    
  }

  onQuestionChange(event: Event): void {
    debugger;
    const selectElement = event.target as HTMLSelectElement;
    const selectedOptionIndex = selectElement.selectedIndex;

    this.selectedIndex = selectedOptionIndex;
  }

  HistoryMinus1() {
    this.location.back();
  }
}