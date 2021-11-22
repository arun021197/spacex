import { Component, OnInit } from '@angular/core';
import { ApiservService } from '../apiserv.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  sucess: boolean = true;
  LandSucc: boolean = true;
  showError: any;


  years:any=[2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];





  constructor( private http: ApiservService) { }

  flightData: any = []


  ngOnInit() {
    this.http.fetchFlights().subscribe(data => {
     
      this.flightData = data;
      if (this.flightData.length == 0) {
        this.showError = "No Record Found";
      }
      console.log("Data :", this.flightData)
     
    })
  }

  
  send(year:any): void {
    console.log(year);
    this.http.fetchAll(year, this.sucess, this.LandSucc).subscribe(data => {
      this.flightData = data;
      console.log("sucees :", this.flightData)
     
    })
  }
  sendSuccess(succ:any) {
    this.sucess = succ;
  
    this.http.fetchLanchSucess(succ).subscribe(data => {
      
      this.flightData = data;
      console.log("sucees :", this.flightData)
   
    })
  }
  LandSuccLuanchSucc(val:any) {
    this.LandSucc = val;
    this.http.fetchLanchSucessAndLandSuccess(val).subscribe(data => {
     
      this.flightData = data;
      console.log("Land :", this.flightData)
    
    })
  }
}
