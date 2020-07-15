import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HereService } from "../here.service";
declare var H: any;

@Component({
  selector: 'app-entry-location',
  templateUrl: './entry-location.component.html',
  styleUrls: ['./entry-location.component.scss'],
  providers: [HereService]
})
export class EntryLocationComponent implements OnInit {

  private platform: any;

  @Input() lat:number;
  @Input() long:number;

  public query: string;
  public position: string;
  public address: any;

    @ViewChild("map")
    public mapElement: ElementRef;

    public constructor(private here: HereService) {
        this.platform = new H.service.Platform({
            'apikey':'SKnBwWXYHw2OyvEl-BkRYQzbMl87ykB_V_PIgx75INE'
        });
        
    }

    public ngOnInit() {
        this.position = this.lat.toString()+","+this.long.toString();
        this.getAddressFromLatLng();
     }

    public ngAfterViewInit() {
        // let defaultLayers = this.platform.createDefaultLayers();
        // let map = new H.Map(
        //     this.mapElement.nativeElement,
        //     defaultLayers.normal.map,
        //     {
        //         zoom: 8,
        //         center: { lat: this.lat, lng: this.long}
        //     }
        // );
        // var ui = new H.ui.UI.createDefault(map, defaultLayers);         
    }

    public getAddressFromLatLng() { 
        if(this.position != "") {
            this.here.getAddressFromLatLng(this.position).then(result => {
                this.address = result;
            }, error => {
                console.error(error);
            });
        }
    }

}
