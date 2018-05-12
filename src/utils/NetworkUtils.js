class Instant {
  constructor() {
    console.log('constructor NetworkUtils');
    this.ws = new WebSocket('ws://192.168.8.103:8080/websocket');

    this.ws.onopen = () => {
      console.log('NetworkUtils onOpen');
      this.ws.send('Hello this is NetworkUtils onOpen'); // send a message
    };

    this.ws.onmessage = e => {
      console.log('NetworkUtils onmessage');
      console.log(e.data);
    };

    this.ws.onerror = e => {
      console.log('NetworkUtils onerror');
      console.log(e.message);
    };

    this.ws.onclose = e => {
      console.log('NetworkUtils onClose');
      console.log(e.code, e.reason);
    };
  }

  send(data) {
    this.ws.send(data);
  }
}

const NetworkUtils = new Instant();
Object.freeze(NetworkUtils);
export default NetworkUtils;
