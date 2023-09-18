import chatEvents from './socket/chat.js';
import productsEvents from './socket/chat.js';
import cartsEvents from './socket/chat.js';

const init = (socketServer) => {
  chatEvents(socketServer);
  productsEvents(socketServer);
  cartsEvents(socketServer);
};

export default init;
