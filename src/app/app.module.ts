import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';

import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';


import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatNativeDateModule,  MatListModule,MatButtonModule,
  MatFormFieldModule,MatDatepickerModule, MatInputModule, MatDividerModule,
  MatSliderModule, MatDialogModule,MatIconModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import {MatExpansionModule} from '@angular/material/expansion';

import{ AngularFireModule} from 'angularfire2';
import{ AngularFireDatabaseModule} from 'angularfire2/database';
import{ AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ComicsComponent } from './comics/comics.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ComicslistComponent } from './comicslist/comicslist.component';
import { NiyamComponent } from './niyam/niyam.component';
import { NgxWheelModule } from "ngx-wheel";




@NgModule({
  declarations: [
    AppComponent,
    AvatarDialogComponent,
    EditUserComponent,
    NewUserComponent,
    HomeComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    ComicsComponent,
    ComicslistComponent,
    NiyamComponent,
    
  ],
  entryComponents: [AvatarDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule, MatNativeDateModule,  MatListModule,
    ScrollDispatchModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    MatExpansionModule,
    MatDividerModule,
    NgxWheelModule
  ],
  exports: [
    MatButtonModule,    
    MatToolbarModule,
    MatIconModule,    
  ],
  providers: [AngularFireStorage,AngularFireDatabase,FirebaseService, EditUserResolver],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
