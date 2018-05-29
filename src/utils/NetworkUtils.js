// let ws = null;
//
// class NetworkUtils {
//   constructor() {
//     console.log('constructor NetworkUtils');
//     if (ws == null) init();
//   }
//
//   send(data) {
//     ws.send(data);
//   }
// }
//
// function init() {
//   console.log('init new socket NetworkUtils');
//   ws = new WebSocket('ws://192.168.8.103:8080/websocket');
//
//   ws.onopen = () => {
//     console.log('NetworkUtils onOpen');
//     ws.send('Hello this is NetworkUtils onOpen'); // send a message
//   };
//
//   ws.onmessage = e => {
//     console.log('NetworkUtils onmessage');
//     console.log(e.data);
//   };
//
//   ws.onerror = e => {
//     console.log('NetworkUtils onerror');
//     console.log(e.message);
//   };
//
//   ws.onclose = e => {
//     console.log('NetworkUtils onClose');
//     console.log(e.code, e.reason);
//   };
// }
//
// export default new NetworkUtils();
