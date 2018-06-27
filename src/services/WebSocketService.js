import LogsUtils, {LOG_TYPE} from "../utils/LogsUtils";

this.instance = null;

export function getWebSocket() {
  console.log("Hello");
  console.log(this.instance);
  if (this.instance == null)
    return new MyWebSocket();
  else
    return this.instance;
}

class MyWebSocket {
  constructor() {
    this.webSocket = null;
    this.hostname = '192.168.8.102';
    this.port = '8080';
    this.endpoint = '/';
  }

  getServerUrl() {
    return "ws://" + this.hostname + ":" + this.port + this.endpoint;
  }

  connect() {
    try {
      LogsUtils.add(LOG_TYPE.INFO, 'create webSocketConnection (should be Rare)');
      this.webSocket = new WebSocket(this.getServerUrl());

      // WebSocket event handlers:
      this.webSocket.onopen = () => {
        console.log('connection was opened');
      };
      this.webSocket.onmessage = (e) => {
        let msg = e.data;
        console.log('onmessage::' + msg);
      };
      this.webSocket.onclose = (e) => {
        console.log('onclose::' + e.message);
      };
      this.webSocket.onerror = (e) => {
        console.log('onerror::' + e.message);
      }

    } catch (exception) {
      console.error(exception);
    }
  }

  getStatus() {
    return this.webSocket.readyState;
  }

  checkConnection() {
    if (!this.webSocket)
      this.connect();
    console.log(this.getStatus())
  }

  send(message) {
    if (this.webSocket.readyState === WebSocket.OPEN)
      this.webSocket.send(message);
    else
      console.error('webSocket is not open. readyState=' + this.webSocket.readyState);
  }

  disconnect() {
    if (this.webSocket.readyState === WebSocket.OPEN)
      this.webSocket.close();
    else
      console.error('webSocket is not open. readyState=' + this.webSocket.readyState);
  }
}