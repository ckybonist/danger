importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyAm1wxM07b2jcLJA3N2m9SCM4gHCIXSJ48',
  authDomain: 'polydice-icook.firebaseapp.com',
  databaseURL: 'https://polydice-icook.firebaseio.com',
  projectId: 'polydice-icook',
  storageBucket: 'polydice-icook.appspot.com',
  messagingSenderId: '380107654687',
  appId: '1:380107654687:web:ce31f268f4e9aba02db72a',
  measurementId: 'G-ZKZX6M179R'
});

const messaging = firebase.messaging();
