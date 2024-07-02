import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { checkRoleSelector } from '../client-info/store/selectors';
import { filter, take } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { BaseComponent } from '../shared/BaseComponent';
import { Location } from '@angular/common';
import { CheckRoleRequest } from './store/actions/getRole.action';
// import { getCheckRoleSelector } from './store/selectors/getRole.selector';

@Component({
  selector: 'app-header-blue-line',
  templateUrl: './header-blue-line.component.html',
  styleUrl: './header-blue-line.component.css'
})
export class HeaderBlueLineComponent extends BaseComponent implements OnInit {

  role: string = ""
  username: string = ""
  pin: string = ""
  showArrow: boolean = false

  constructor(private store: Store, private router: Router, private location: Location) {
    super()
    this.subscriptions.push(this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      this.showArrow = url !== '/client-policies';
    }));
  }

  ngOnInit() {
    this.store.select(checkRoleSelector).pipe(
      filter(item => !!item),
      take(1)
    ).subscribe((item: any) => {
      this.role = item.success.role;
      this.username = item.success.userName;
      this.pin = item.success.pin
    });

    this.store.dispatch(CheckRoleRequest())

    // this.store.select(getCheckRoleSelector).pipe(
    //   filter(item => !!item),
    //   take(1)
    // ).subscribe((item: any) => {
    //   debugger;
    // })
  }

  onLogout() {
    debugger;
    // this.store.dispatch(logoutActionRequest());
  }

  historyMinus1(){
    this.location.back();
  }
}
