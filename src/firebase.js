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
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const fs = firebase.firestore(app);
const user = () => firebase.auth().currentUser;

const signUp = (email, password) => auth
  .createUserWithEmailAndPassword(email, password);
const logIn = (email, password) => auth
  .signInWithEmailAndPassword(email, password);
const singinGoogle = (provider) => auth
  .signInWithEmailAndPassword(provider);
const signout = () => auth
  .signOut();

const savePost = (description) => {
  const callingUser = user();
  fs.collection('posts').doc().set({
    description,
    uid: [
      callingUser.email,
      callingUser.displayName,
    ],
    likes: [],
  });
};

const deletePost = (id) => fs.collection('posts').doc(id).delete();
const onGetPosts = (callback) => fs.collection('posts').onSnapshot(callback);
const updatePost = (id, updatedPost) => fs.collection('posts').doc(id).update(updatedPost);
const getPost = (id) => fs.collection('posts').doc(id).get();

export {
  deletePost,
  onGetPosts,
  savePost,
  updatePost,
  getPost,
  user,
  signUp,
  logIn,
  singinGoogle,
  signout,
  auth,
};
