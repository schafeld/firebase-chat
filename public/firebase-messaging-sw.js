// This threw error locally for me:
// "Failed to execute 'importScripts' on 'WorkerGlobalScope' ... The script does not have a MIME type."
// importScripts("/__/firebase/8.1.1/firebase-app.js");
// importScripts("/__/firebase/8.1.1/firebase-messaging.js");
// So I used snippet from https://firebase.google.com/docs/cloud-messaging/js/receive instead:
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');


importScripts('/__/firebase/init.js');

firebase.messaging();