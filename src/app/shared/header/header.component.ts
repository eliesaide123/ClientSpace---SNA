import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BaseComponent } from '../BaseComponent';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent extends BaseComponent implements OnInit {

  showAddress: boolean = true;
  showEmail: boolean = true;
  showWorkingHours: boolean = true;

  CompanyName: string = ""
  CompanyNameAndAddress: string = ""
  CompanyNameAndAddress2: string = ""
  CompanyContactPhoneNb: string = ""
  WorkingHours: string = ""
  CompanyContactEmail: string = ""
  CompanyFacebook: string = ""
  CompanyLinkedIn: string = ""
  CompanyInstragram: string = ""
  CompanyYoutube: string = ""

  constructor(private router: Router) {
    super()
    this.CompanyName = environment.CompanyName;
    this.CompanyNameAndAddress = environment.CompanyNameAndAddress;
    this.CompanyNameAndAddress2 = environment.CompanyNameAndAddress2;
    this.CompanyContactPhoneNb = environment.CompanyContactPhoneNb;
    this.WorkingHours = environment.WorkingHours;
    this.CompanyContactEmail = environment.CompanyContactEmail;
    this.CompanyFacebook = environment.CompanyFacebook;
    this.CompanyLinkedIn = environment.CompanyLinkedIn;
    this.CompanyInstragram = environment.CompanyInstragram;
    this.CompanyYoutube = environment.CompanyYoutube;

    this.subscriptions.push(this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      this.showAddress = url == '/'
      if(url == '/register' || url == '/profile' || url == '/client-policies'){
        this.showEmail = true
      }else{
        this.showEmail = false
      }
      this.showWorkingHours = url !== '/register' && url !== '/profile' && url !== '/client-policies';
    }));
  }

  ngOnInit() {

  }

}