import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
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

  constructor() {
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
  }
}
