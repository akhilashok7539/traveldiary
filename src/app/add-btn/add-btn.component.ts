import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import * as moment from 'moment';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import Swal from 'sweetalert2';
import { AngularFirestore } from '@angular/fire/firestore';
import { EntryService } from '../entry-service.service';
@Component({
  selector: 'app-add-btn',
  template: `
    <div>
      <button mat-fab color="accent" class="fab-bottom-right" (click)="newRecord()" matTooltip="New Entry">
        <mat-icon>add</mat-icon>
      </button>
    </div>
  `,
  styleUrls: [
    './add-btn.component.scss'
  ],
  providers:[EntryService]
})
export class AddBtnComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  newRecord(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    // dialogConfig.height = '500px';
    // dialogConfig.width = '300px';
    const dialogRef = this.dialog.open(DialogContentExampleDialog, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
    });

    dialogRef.afterOpened().subscribe(result => {
    });
  }

}
export class IconOverviewExample {}

@Component({
  selector: 'new-record-dialog',
  templateUrl: 'new-record-dialog.html',
})
export class DialogContentExampleDialog implements OnInit{

  form: FormGroup;
  latitude:number;
  longitude:number;
  constructor(
    private fb: FormBuilder,
        private dialogRef: MatDialogRef<DialogContentExampleDialog>,
        @Inject(MAT_DIALOG_DATA) data, private entryservice: EntryService) {
          this.getLocation();
          this.form = fb.group({
            time:[moment().format("HH:mm")],
            date:[new Date()],
            latitude:[''],
            longitude:[''],
            addInfo:['']
          });
    }
  
    ngOnInit(){
      
    }
  save(){
    if(!this.form.value.date)
    {
      Swal.fire({
        icon: 'error',
        title: 'Error!!',
        text: 'Enter Date'
      });
    }
    else if(!this.form.value.time)
    {
      Swal.fire({
        icon: 'error',
        title: 'Error!!',
        text: 'Enter Time'
      });
    }
    else if(!this.form.value.latitude || !this.form.value.longitude)
    {
      Swal.fire({
        icon: 'error',
        title: 'Error!!',
        text: 'Location not found!! Enable location access in Site Settings'
      });
    }
    else
    {
      let data = this.form.value;
      data.uid = JSON.parse(localStorage.user).uid;
      this.entryservice.createEntry(data).then(
        res => {
          this.dialogRef.close(this.form.value);
          Swal.fire({
            icon: 'success',
            title: 'Success!!',
            text: 'Entry Added'
          });
        },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'Error!!',
            text: 'Could not add Entry!!!'
          });
        }
      );
    }
  }

  getLocation(){
    if (navigator)
    {
      navigator.geolocation.getCurrentPosition( pos => {
          this.longitude = pos.coords.longitude;
          this.latitude = pos.coords.latitude;
        });
    }
  }
}


