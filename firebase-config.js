// firebase-config.js
(function initializeFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyBUMnzUEqWQ8I7xyx99r0_4lKdKhgmFlfY",
        authDomain: "facturacion-667e6.firebaseapp.com",
        projectId: "facturacion-667e6",
        storageBucket: "facturacion-667e6.appspot.com",
        messagingSenderId: "113022628074",
        appId: "1:113022628074:web:2fc742d06e1979b013e793",
        measurementId: "G-4JR1R0PLCM"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
})();
