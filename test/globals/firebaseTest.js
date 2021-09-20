global.firebase = {
  initializeApp: () => console.log('hi firebase'),
  firestore: () => console.log('hi'),
  auth: () => ({
    createUserWithEmailAndPassword: () => Promise.resolve(),
    onAuthStateChanged: () => Promise.resolve(),
  }),
};
