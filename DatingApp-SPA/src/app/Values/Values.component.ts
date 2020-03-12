import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Values',
  templateUrl: './Values.component.html',
  styleUrls: ['./Values.component.css']
})
export class ValuesComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getValues(){
    this.http.get('https://localhost:5001/api/Values').subscribe(response =>{
      this.values = response;

    },
    error =>{
      console.log(error);
    });
  }

}
