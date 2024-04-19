import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  showIcons: boolean = false;  

  constructor(private router : Router) {
    this.form = new FormGroup({
      userid: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false),
    })
  }

  ngOnInit() {    
    this.showIcons = true
  }

  togglePasswordVisibility(){    
    this.showIcons = !this.showIcons;
  }

  onSubmit() {
    const username = this.form.get('userid')?.value;
    const chkChecked = this.form.get('rememberMe')?.value;

    if (this.form.valid) {
      alert("form submitted");
      console.log(this.form.value)
      if(chkChecked == true){        
        sessionStorage.setItem("Username", username);
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

}
