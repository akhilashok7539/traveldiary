import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import Swal from 'sweetalert2';
import { AuthService } from "../authentication.service";

@Component({
  selector: 'app-sign-in-screen',
  templateUrl: './sign-in-screen.component.html',
  styleUrls: ['./sign-in-screen.component.scss']
})
export class SignInScreenComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.form = fb.group({
      email:[''],
      password:['']
    });
  }

  ngOnInit(): void {
  }

  enableProgressBar = false;

  signIn(){
    this.enableProgressBar = true;
    if(!this.form.value.email)
    {
      Swal.fire({
        icon: 'error',
        title: 'Error!!',
        text: 'Enter Email'
      });
      return false;
    }
    else
    {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(this.form.value.email) == false) 
      {
        Swal.fire({
          icon: 'error',
          title: 'Error!!',
          text: 'Invalid Email'
        });
        return false;
      }
    }
    if(!this.form.value.password)
    {
      Swal.fire({
        icon: 'error',
        title: 'Error!!',
        text: 'Enter password'
      });
      return false;
    }
    this.authService.signIn(this.form.value.email, this.form.value.password).then((result) => {
      this.enableProgressBar = false;
    });
  }
}
