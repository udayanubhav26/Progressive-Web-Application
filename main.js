import { getMessaging, getToken } from "firebase/messaging";

const messaging = getMessaging(firebaseApp); // firebaseApp is your initialized Firebase app

// Ask for permission
Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    console.log("Notification permission granted.");

    // Get the device token
    getToken(messaging, { vapidKey: "BDGt99lp7bqoqczeOB6rrLkvsTTrb7y2P4Is2M9yTSiAZGDJdrWj_qEGl7HW0qHqM59sEiWvp7TyuwcdLpcgih4" })
      .then((currentToken) => {
        if (currentToken) {
          console.log("Device registration token:", currentToken);
          // save this token somewhere safe (DB or copy for Node.js)
        } else {
          console.log("No registration token available. Request permission to generate one.");
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });
  } else {
    console.log("Notification permission denied.");
  }
});