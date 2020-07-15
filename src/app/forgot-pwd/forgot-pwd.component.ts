import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import Swal from 'sweetalert2';
import { AuthService } from "../authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.scss']
})
export class ForgotPwdComponent implements OnInit {
  
  form: FormGroup;
  enableProgressBar = false;

  constructor(private fb: FormBuilder, public authService: AuthService, public router: Router,
    ) { 
    this.form = fb.group({
      email:['']
    });
  }

  ngOnInit(): void {
  }

  resetPassword(){
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
    this.authService.forgotPassword(this.form.value.email).then((result) => {
      this.enableProgressBar = false;
      this.router.navigate(['login']);
    })
    .catch(() => {
      this.enableProgressBar = false;
    });
  }

}
