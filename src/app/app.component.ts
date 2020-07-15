import { Component } from '@angular/core';
import { AuthService } from "./authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Travel Diary';

  constructor(public authService: AuthService, public router: Router){}
  ngOnInit(){
    if(this.authService.isLoggedIn)
    {
      this.router.navigate(['list']);
    }
    else
    {
      this.router.navigate(['login']);
    }
  }
}
