// var connection;
// var peer = new Peer();
// peer.on('open', function(id) {
//   document.getElementById('mySessionId').innerHTML = `My PeerID: ${id}`; //TODO: move document to integration to logic
// });

// function incomingKey(key) {
//   console.log(key);
// }

// function join(hostId) {
//   connection = peer.connect(hostId);
//   connection.on('open', onConnected);
// }

// function leave() {

// }

// function onConnected() {
//   // Receive messages
//   connection.on('data', onMessageReceived);

//   // Send messages
//   connection.send('Hello!');
// }

// // Recibe tecla y acciona
// function onMessageReceived() {
//   console.log('Received', data);
// }

// // Al apretar boton manda tecla
// // action: "Enum" que determina -> Atras, Adelante, Espacio
// function sendMessage(action) {

// }

// // how we receive data:
// chrome.runtime.onMessage.addListener((msg, sender, res) => {
//   chrome.extension.getBackgroundPage().console.log(msg);
//   if (msg.action === 'join') {
//     join(msg.hostId);
//   }

// });
