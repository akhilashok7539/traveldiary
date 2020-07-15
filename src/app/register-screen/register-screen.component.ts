import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import Swal from 'sweetalert2';
import { AuthService } from "../authentication.service";
@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss'],
  providers: [AuthService]
})
export class RegisterScreenComponent implements OnInit {

  form: FormGroup;
  enableProgressBar = false;

  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.form = fb.group({
      name:[''],
      email:[''],
      password:['']
    });
  }

  ngOnInit(): void {
  }

  register(){
    this.enableProgressBar = true;
    if(!this.form.value.name)
    {
      Swal.fire({
        icon: 'error',
        title: 'Error!!',
        text: 'Enter Name'
      });
      return false;
    }
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
    this.authService.signUp(this.form.value.email, this.form.value.password).then((result) => {
      this.enableProgressBar = false;
    });;
  }
}
