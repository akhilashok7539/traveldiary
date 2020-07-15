import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private firestore: AngularFirestore) {
    
   }

   createEntry(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("entries")
        .add(data)
        .then(res => {resolve(res)}, err => reject(err));
    });
  }

  getEntries() {
    return this.firestore.collection("entries", ref => ref.where("uid", "==", JSON.parse(localStorage.user).uid).orderBy("date", "desc")).snapshotChanges();
  }
}
