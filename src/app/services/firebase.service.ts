import { Injectable, Query } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getAvatars(){
      return this.db.collection('/avatar').valueChanges()
  }

  getUser(userKey){
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('users').doc(userKey).set(value);
  }

  fetchComment(userKey){
    return this.db.collection('users').doc(userKey).collection("comments",ref => ref.orderBy('createdDate', "desc")).snapshotChanges();
  }

  updateComment(userKey, value){    
    return this.db.collection('users').doc(userKey).collection("comments").add(value);
  }

  deleteUser(userKey){
    return this.db.collection('users').doc(userKey).delete();
  }

  getUsers(){
    return this.db.collection('users',ref => ref.orderBy('dateOfPathshala',"desc")).snapshotChanges();
  }

  getKalyanak(searchValue){
    return this.db.collection('kalyanak',ref => ref.where('kalyanaktithi', '==', searchValue))
    .snapshotChanges();
    
  }


  getComics(){
    return this.db.collection('comics').snapshotChanges();
  }

  getCommentsCount(userKey){
    return this.db.collection('users').doc(userKey).collection("comments").get();
  }



  searchUsers(searchValue){
    return this.db.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value){
    return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createUser(value, avatar){
    return this.db.collection('users').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname,
      age: parseInt(value.age),
      avatar: avatar,
      dateOfPathshala:value.dateOfPathshala 
    });
  }
}
