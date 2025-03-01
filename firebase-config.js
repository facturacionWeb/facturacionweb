// firebase-config.js
(function initializeFirebase() {
    /*const firebaseConfig = {
        apiKey: "AIzaSyBUMnzUEqWQ8I7xyx99r0_4lKdKhgmFlfY",
        authDomain: "facturacion-667e6.firebaseapp.com",
        projectId: "facturacion-667e6",
        storageBucket: "facturacion-667e6.appspot.com",
        messagingSenderId: "113022628074",
        appId: "1:113022628074:web:2fc742d06e1979b013e793",
        measurementId: "G-4JR1R0PLCM"
    };*/
    const firebaseConfig = {
    apiKey: "AIzaSyAkr-GuImdRLYgcW6hnEd-Kq6aGF-y8LhM",
    authDomain: "facturacion-667e6-36f7f.firebaseapp.com",
    projectId: "facturacion-667e6-36f7f",
    storageBucket: "facturacion-667e6-36f7f.firebasestorage.app",
    messagingSenderId: "228202657935",
    appId: "1:228202657935:web:dfdb40c1a427f040c298fa",
    measurementId: "G-1Y59QZ209G"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
})();
