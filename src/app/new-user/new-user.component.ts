import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AvatarDialogComponent } from "../avatar-dialog/avatar-dialog.component";
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  

  dateOfBirth: Date;
  exampleForm: FormGroup;
  avatarLink: string = "https://firebasestorage.googleapis.com/v0/b/ajitnathjainpathshala.appspot.com/o/avatar%2Fmahaveer_swami.jpg?alt=media&token=94696029-8bca-4db5-b9ac-e31fdcd7d6e2";

  validation_messages = {
   'name': [
     { type: 'required', message: 'Title is required.' }
   ],
   'surname': [
     { type: 'required', message: 'Description is required.' }
   ],
   'age': [
     { type: 'required', message: 'No of students is required.' },
   ],
   'dateOfPathshala': [
    { type: 'required', message: 'Date Of Pathshala is required.' },
  ]
 };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.createForm();
    this.dateOfBirth =  new Date();
    
  }

  createForm() {
    this.exampleForm = this.fb.group({
      name: ['', Validators.required ],
      surname: ['', Validators.required ],
      age: ['', Validators.required ],
      dateOfPathshala: ['', Validators.required ] 
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.avatarLink = result.link;
      }
    });
  }

  resetFields(){
    this.avatarLink = "https://firebasestorage.googleapis.com/v0/b/ajitnathjainpathshala.appspot.com/o/avatar%2Fmahaveer_swami.jpg?alt=media&token=94696029-8bca-4db5-b9ac-e31fdcd7d6e2";
    this.exampleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      dateOfPathshala: new FormControl(new Date() , Validators.required),
    });
  }

  onSubmit(value){
    this.firebaseService.createUser(value, this.avatarLink)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/home']);
      }
    )
  }

}
