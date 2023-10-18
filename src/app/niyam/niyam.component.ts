import { Component, OnInit } from '@angular/core';
import { NgxWheelModule } from "ngx-wheel";

@Component({
  selector: 'app-niyam',
  templateUrl: './niyam.component.html',
  styleUrls: ['./niyam.component.css']
})
export class NiyamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('niyam onload '+this.niyam);

  }
  count:number = 0;
  //niyam:string  = "";
  dailyniyam ="";
  ran = Math.floor(Math.random() * Math.floor(12));
  //ran = Math.floor((Math.random()*13));
    //console.log('ran'+this.ran);

    
  colors = [
    "DimGrey",
    "DarkCyan",
    "tan",
    "yellow",
    "Orange",
    "green",
    "purple",
    "blue",
    "Olive",
    "Brown",
    "CadetBlue",
    "crimson",
  ];
  //10, 9, 6 ,2
  prizes = [
    "  1",
    "  2",
    "  3",
    "  4",
    "  5",
    "  6",
    "  7",
    "  8",
    "  9",
    "  10",
    "  11",
    "  12"
  ];

  aajkaniyam = [
    "आज देव दर्शन करना है |", 
"रात्रि भोजन त्याग", 
"झुठ नहीं बोलना", 
"किसी की मदद करना ",
"जमीकंद नहीं खाना", 
"होटल जाने का त्याग", 
"आज कुछ समय स्वाध्याय करना", 
"भक्तामर का पाठ करना",
"सप्त व्यसन का त्याग", 
"जीव हिंसा का त्याग", 
"मौन होकर भोजन करना ",
"क्रोध न करना" 
 
    // "Grand prize",
    // "demo 2",
    // "demo 3",
    // "demo 4",
    // "demo 5",
    // "demo 6",
    // "demo 7",
    // "demo 8",
    // "demo 9",
    // "demo 10",
    // "demo 11",
    // "demo 12"
  ];
  niyam = this.prizes[this.ran];
  beforeSpinFn = function () {
   
  };
  spinOnce = false;
  
  afterSpinFn = function () {

    this.dailyniyam  = this.aajkaniyam[this.ran];

    this.ran = Math.floor(Math.random() * Math.floor(12));
    //this.ran = Math.floor((Math.random()*13));
     console.log('ran'+this.ran);

     this.niyam = this.prizes[this.ran];
     this.count++;
     //alert("after");
  };

  randomNumber = function(){
     //Math.random();
     alert("random");
  };


}
