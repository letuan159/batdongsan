import firebase from "firebase/app";
// import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

export function connectDatabase() {
    const firebaseConfig = {
        apiKey: "AIzaSyDsxbzo0rdX8WzdKTHGFpcM_XE5N82sX-c",
        authDomain: "test-437c3.firebaseapp.com",
        projectId: "test-437c3",
        storageBucket: "test-437c3.firebasestorage.app",
        messagingSenderId: "1091285397973",
        appId: "1:1091285397973:web:b123a55eb29987f1030d5c",
        measurementId: "G-S3Z2B7Y84Q"
        // apiKey: "AIzaSyAezgatVQESrA5h7WSEch5RmSpttEvdZW8",
        // authDomain: "batdongsan2-6a0ea.firebaseapp.com",
        // databaseURL: "https://batdongsan2-6a0ea-default-rtdb.firebaseio.com",
        // projectId: "batdongsan2-6a0ea",
        // storageBucket: "batdongsan2-6a0ea.appspot.com",
        // messagingSenderId: "107829120498",
        // appId: "1:107829120498:web:a15527a154e9d57018ef6b",
        // measurementId: "G-81NSN6NSNF"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log("ket noi thanh cong");
    }
}