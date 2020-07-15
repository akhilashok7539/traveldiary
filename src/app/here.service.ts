import { Injectable } from '@angular/core';

declare var H: any;

@Injectable({
  providedIn: 'root'
})
export class HereService {
  
  public platform: any;
  public geocoder: any;

  constructor() {
    this.platform = new H.service.Platform({
      'apikey':'LcvjLQCrcOuUsKGba1b-6GP2pfpldQTEIwsvRZk3ZOY'
    });
    this.geocoder = this.platform.getSearchService();
  }

  public getAddress(query: string) {
    return new Promise((resolve, reject) => {
        this.geocoder.reverseGeocode({ at: query }, result => {
            if(result.items.length > 0) {
              if(result.items.length > 0) {
                  resolve(result.items[0].title);
              } else {
                  reject({ message: "no results found" });
              }
          } else {
              reject({ message: "no results found" });
          }
        }, error => {
            reject(error);
        });
    });
}

  public getAddressFromLatLng(query: string) {
    return new Promise((resolve, reject) => {
        this.geocoder.reverseGeocode({ at: query, mode: "retrieveAddress" }, result => {
            if(result.items.length > 0) {
                if(result.items.length > 0) {
                    resolve(result.items[0].title);
                } else {
                    reject({ message: "no results found" });
                }
            } else {
                reject({ message: "no results found" });
            }
        }, error => {
            reject(error);
        });
    });
  }
}
