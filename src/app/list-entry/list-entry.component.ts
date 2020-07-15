import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EntryService } from '../entry-service.service';
import { EntryLocationComponent } from '../entry-location/entry-location.component';
import { AuthService } from "../authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.scss']
})
export class ListEntryComponent implements OnInit {

  constructor(private entryService: EntryService, public authService: AuthService, public router: Router,
    ) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn)
    {
      this.getEntryList();
    }
    else
    {
      this.router.navigate(['login']);
    }
  }

  ngAfterViewInit(){
    this.enableProgressBar = false;
  }

  entries;
  enableProgressBar = true;

  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = true;
  size: number = 30;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = 'left';

  getEntryList = () =>
    this.entryService
      .getEntries()
      .subscribe(res => (this.entries = res));
}