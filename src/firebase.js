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
const user = () => {
  return firebase.auth().currentUser;
};

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
// const increment = firebase.firestore.FieldValue.increment(1);
const likesArray = (id) => {
  const callingUser = user();
  const post = fs.collection('posts').doc(id);
  post.update({
    likes: firebase.firestore.FieldValue.arrayUnion(callingUser.uid),
  });
};

const deletePost = (id) => fs.collection('posts').doc(id).delete();
const onGetPosts = (callback) => fs.collection('posts').onSnapshot(callback);
const updatePost = (id, updatedPost) => fs.collection('posts').doc(id).update(updatedPost);
const getPost = (id) => {
  return fs.collection('posts').doc(id).get();
};

export {
  likesArray,
  deletePost,
  onGetPosts,
  savePost,
  auth,
  fs,
  updatePost,
  getPost,
  user,
};