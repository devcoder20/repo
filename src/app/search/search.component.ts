import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  userName = '';
public vehicle = 'Merce AMG';
public vehicleObj :any
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value.vimNumber);
   this.ApiCall(form.value.vimNumber);
    }
  }

  ApiCall( params : any) {
   const headers = {
    "content-type":"application/json",
    "authorization":"YjNlYjg1MTgtMWJiNS00N2ExLWExZmEtMjljNDljOTBhNjcy",
    "partner-token":"e2c0534287684c4dbdc3070ee7bedfc6",
  }  ;
   this.http.get<any>(`http://api.carmd.com/v3.0/image?vin=${params}`,{headers}).subscribe(data =>{
     console.log(data);
     this.vehicleObj = data;
   });
  }

}
