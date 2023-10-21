let connection;
let peer = new Peer();
peer.on('open', function(id) {
  document.getElementById('mySessionId').innerHTML = `My PeerID: ${id}`; //TODO: move document to integration to logic
});

document.getElementById("joinButton").addEventListener("click", function() {
	join();
});

/*
function openConnection(){
  var peer = new Peer();
  peer.on('open', function(id) {
    console.log('Share this ID: ' + id);
  });
}*/

function join () {
  console.log('join function');
  let hostId = document.getElementById('hostId').value;
  // chrome.runtime.sendMessage({ "hostId": hostId, "action": "join" });
  connection = peer.connect(hostId);
  connection.on('open', onConnected);
}

function onConnected() {
  // Receive messages
  connection.on('data', onMessageReceived);
  console.log("Connected");
  // Send messages
  connection.send('Hello!');
}

function leave() {
  connection.close();
}

// Recibe tecla y acciona
function onMessageReceived() {
  console.log('Received', data);
}

// Al apretar boton manda tecla
// action: "Enum" que determina -> Atras, Adelante, Espacio
function sendMessage(action) {

}
