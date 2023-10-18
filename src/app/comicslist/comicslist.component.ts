import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router, Params } from '@angular/router';

import { ComicsComponent } from '../comics/comics.component';

@Component({
  selector: 'app-comicslist',
  templateUrl: './comicslist.component.html',
  styleUrls: ['./comicslist.component.css']
})
export class ComicslistComponent implements OnInit {

  comics: Array<any>;
  pdfNo:number;
  constructor( public firebaseService: FirebaseService,
    private router: Router) { }

  ngOnInit() {
    this.getComics();
  }


  getComics(){
    this.firebaseService.getComics()
    .subscribe(result => {
      this.comics = result;
    })
  }

  viewNumber(pdfNo){
    this.router.config.find(r => r.component == ComicsComponent).data = pdfNo;
      this.router.navigate(["/mycomics"]);
    //this.router.navigate(['/comics/'+ 1+"/?abhi=aaa"])
  }
}
