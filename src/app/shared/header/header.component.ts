import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

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

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.showAddress = event.urlAfterRedirects !== '/register';
      this.showEmail = event.urlAfterRedirects == '/register';
      this.showWorkingHours = event.urlAfterRedirects !== '/register';
    });
  }

  ngOnInit() {

  }

}