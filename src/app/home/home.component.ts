import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ComicsComponent } from '../comics/comics.component';
import { map } from 'rxjs/operators';
import { kalyanak } from './kalyanak';
import { MapType } from '@angular/compiler';
//import { DatePipe } from '@angular/common';
import {formatDate } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  ageValue: number = 0;
  searchValue: string = "";
  filePath: string = "https://firebasestorage.googleapis.com/v0/b/ajitnathjainpathshala.appspot.com/o/uploads%2FTest.pdf?alt=media&token=cf99a6c7-f5b2-4226-b3df-45df1d45d462";
  items: Array<any>;
  comics: Array<any>;
  kalyanak:  any[];
  age_filtered_items: Array<any>;
  name_filtered_items: Array<any>;
  noofcomments:number;
  countComment_items: any;
  countdata : Array<any> = [];
  pdfNo:number;
  persons:Array<any>;
  tirthankar:any[];
  bhagwan:any[];
  myDate:string;
  todayd:Date =null;
  //object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  object: {[key: string]: any[]};
  
  today = new Date();;
  jstoday = '';

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
    
    
  ) { 
    this.jstoday = formatDate(this.today, 'ddMMyyyy', 'en-US', '+0530');
  }

  ngOnInit() {

    var dateNow1 = new Date();
    
    this.getData();
    this.getKalyanak();
    this.getComics();

     
    //this.getCommentsCount();
  ///  this.test();

  {{this.countComment_items}}
  }

  getCommentsCount(key){
  this.firebaseService.getCommentsCount(key)
  .subscribe(result => {
    this.noofcomments = result.size;
    
  })
}

test(){
    for (let entry of this.items) {
      console.log("entry.payload.doc.id "+entry.payload.doc.id); // 1, "string", false
    }
  }



  getComics(){
    this.firebaseService.getComics()
    .subscribe(result => {
      this.comics = result;
    })
  }

  getKalyanak(){

     this.firebaseService.getKalyanak(this.jstoday).pipe(
      map(changes =>
        changes.map(c => (
          { key: c.payload.doc.id, ...c.payload.doc.data() }
        )      
      )
      )
    ).subscribe((data) => {
      if(data!=null){
      this.kalyanak = data;
      var hello = JSON.stringify(data[0]);
      var obj = JSON.parse(hello);

      
    //  console.log(data[0]);
    this.object = obj.kalyanak;
      //this.persons : obj.kalyanak;
     //console.log(this.persons[0]);
     //this.bhagwan = ["dharmnath","nemi"];
    //  this.bhagwan =Object.keys(obj.kalyanak);

  }
    });


     
  }
  getData(){
    this.firebaseService.getUsers()
    .subscribe(result => {
      this.items = result;
      
      for (let entry of this.items) {
     //   console.log("entry.payload.doc.id "+entry.payload.doc.id); // 1, "string", false
        this.firebaseService.getCommentsCount(entry.payload.doc.id)
        .subscribe(result => {
          this.noofcomments = result.size;
      //    console.log(" this.noofcomments "+ this.noofcomments);
        //  this.items.push({"noofcomments":this.noofcomments});
          this.countdata.push(this.noofcomments);  
       //   console.log("countdata "+ this.countdata);
        })
      }
      this.age_filtered_items = result;
      this.name_filtered_items = result;

    })
  }


  viewNumber(pdfNo){
    this.router.config.find(r => r.component == ComicsComponent).data = pdfNo;
      this.router.navigate(["/comics"]);
    //this.router.navigate(['/comics/'+ 1+"/?abhi=aaa"])
  }

  viewDetails(item){
    this.router.navigate(['/details/'+ item.payload.doc.id])
  }
  uploadFiles(item){
    this.router.navigate(['/details/'+ item.payload.doc.id])
  }

  capitalizeFirstLetter(value){
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  searchByName(){
    let value = this.searchValue.toLowerCase();
    this.firebaseService.searchUsers(value)
    .subscribe(result => {
      this.name_filtered_items = result;
      this.items = this.combineLists(result, this.age_filtered_items);
    })
  }

  rangeChange(event){
    this.firebaseService.searchUsersByAge(event.value)
    .subscribe(result =>{
      this.age_filtered_items = result;
      this.items = this.combineLists(result, this.name_filtered_items);
    })
  }

  combineLists(a, b){
    let result = [];

    a.filter(x => {
      return b.filter(x2 =>{
        if(x2.payload.doc.id == x.payload.doc.id){
          result.push(x2);
        }
      });
    });
    return result;
  }

}
