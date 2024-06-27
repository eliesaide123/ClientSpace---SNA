import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { checkRoleSelector } from '../client-info/store/selectors';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-header-blue-line',
  templateUrl: './header-blue-line.component.html',
  styleUrl: './header-blue-line.component.css'
})
export class HeaderBlueLineComponent implements OnInit {
  
  role: string = ""
  username : string = ""
  pin : string = ""

  constructor(private store : Store) {}

  ngOnInit() {
      this.store.select(checkRoleSelector).pipe(
        filter(item => !!item),
        take(1)
      ).subscribe((item: any) => {
        this.role = item.success.role;
        this.username = item.success.userName;
        this.pin = item.success.pin
      });
  }

}
