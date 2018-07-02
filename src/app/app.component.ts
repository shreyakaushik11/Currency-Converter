import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url="https://exchangeratesapi.io/api/latest?base=";
  base=[];
  i;
  number;
  answer;
  x;
  base_code;
  n;
  base_value;
  target_value;
  constructor(private http: HttpClient){

  }
  ngOnInit(){
    this.getData();
  }
  getData(){
    this.http.get(this.url).subscribe((data)=>{
      this.base.push(data['base']);
      // console.log(data.keys(rates);
      for (let prop in data['rates']) {
        this.base.push(prop);
        console.log(this.base);
       
      }
    })
  }
  getAnswer(){
      this.http.get(this.url+this.base_value).subscribe((data)=>{
      this.answer=data['rates'][this.target_value]*this.number;
      console.log(this.answer);
  })
  }
}