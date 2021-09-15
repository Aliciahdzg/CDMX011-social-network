global.firebase = {
  initializeApp: () => console.log('hi firebase'),
  firestore: () => console.log('hi firestore'),
  auth: () => ({
    createUserWithEmailAndPassword: () => console.log('hi signup'),
    onAuthStateChanged: () => console.log('hola usuario'),
  }),
};
