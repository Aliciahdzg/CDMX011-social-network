import { onNavigate } from './app.js';

export {
  deletePost,
  editPost,
  onGetPosts,
  savePost,
  auth,
  fs,
  updatePost,
  getPost,
};

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCePjssRyoR6G8wuu7NbwopYolEZvL5IVw',
  authDomain: 'plantagram-8b720.firebaseapp.com',
  projectId: 'plantagram-8b720',
  storageBucket: 'plantagram-8b720.appspot.com',
  messagingSenderId: '419438451849',
  appId: '1:419438451849:web:96555010ec2ba7afb1fa58',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const fs = firebase.firestore();

const savePost = (description) => {
  if (description !== '') {
    fs.collection('posts').doc().set({
      description,
    });
  }
};
const deletePost = (id) => {
  fs.collection('posts').doc(id).delete();
};
const editPost = (id) => {
  fs.collection('posts').doc(id).get();
};
const onGetPosts = (callback) => {
  fs.collection('posts').onSnapshot(callback);
};
const updatePost = (id, updatedPost) => {
  fs.collection('posts').doc(id).update(updatedPost);
};
const getPost = (id) => { return fs.collection.doc(id).get(); };