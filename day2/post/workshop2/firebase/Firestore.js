import * as firebase from 'firebase';
import '@firebase/firestore';
import FIREBASE_CONFIG from './Config';

class Firestore {
  constructor() {
    if (!firebase.apps.length) {
      //firebase.initializeApp(FIREBASE_CONFIG);
      firebase.initializeApp({ projectId: 'myproject-b75da' });
    } else {
      console.log('firebase apps already running...');
    }
    this.db = firebase.firestore();
  }

  listeningMessage(room,listeningSuccess,listeningUnsuccess){
    this.db.collection('Message').where('room',"==",room)
      .onSnapshot(function(snapshot){
        snapshot.docChanges().forEach(function(change){
          if(change.type==="added"){
            listeningSuccess(change.doc);
          }
        });
      },function(error){
        listeningUnsuccess(error)
      });
  }

  getMessage(room,getSuccess,getUnsuccess){
    this.db.collection('Message').where('room','==',room)
    .get()
    .then(function(querySnapshot){
      getSuccess(querySnapshot);
    })
    .catch(function(error){
      getUnsuccess(error);
    });
  }

  addMessage(message, addSuccess, addUnsuccess) {
    message.date = firebase.firestore.FieldValue.serverTimestamp();
    this.db
      .collection('Message')
      .add(message)
      .then(function (docRef) {
        addSuccess(docRef);
      })
      .catch(function (error) {
        addUnsuccess(error);
      });
  }
}

const firestore = new Firestore();
export default firestore;
