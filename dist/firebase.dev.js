"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = exports.db = exports.app = void 0;

var _app = require("firebase/app");

var _firestore = require("firebase/firestore");

var _storage = require("firebase/storage");

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCYKMJKIvncyQ6ymZumCym8uizuzO-Dnb8",
  authDomain: "instagram-91061.firebaseapp.com",
  projectId: "instagram-91061",
  storageBucket: "instagram-91061.appspot.com",
  messagingSenderId: "346383729072",
  appId: "1:346383729072:web:005ab8f7cd6d7314e01675"
}; // Initialize Firebase

var app = !(0, _app.getApps)().length ? (0, _app.initializeApp)(firebaseConfig) : (0, _app.getApp)();
exports.app = app;
var db = (0, _firestore.getFirestore)();
exports.db = db;
var storage = (0, _storage.getStorage)();
exports.storage = storage;