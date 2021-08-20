importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyCHAa-pyqdOLrzQBwtE3r3zIDurGxojmNk",
    authDomain: "commonpushnotification.firebaseapp.com",
    projectId: "commonpushnotification",
    storageBucket: "commonpushnotification.appspot.com",
    messagingSenderId: "1047045887110",
    appId: "1:1047045887110:web:cd4110a325592c17fbad07",
    measurementId: "G-DFGRT4D1V4"
  };

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});