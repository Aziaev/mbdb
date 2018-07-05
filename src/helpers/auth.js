import * as firebase from 'firebase';
import { FIREBASE_AUTH_CFG } from '../variables/Variables';

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_AUTH_CFG);
}

const auth = firebase.auth();

export {
  auth,
};
