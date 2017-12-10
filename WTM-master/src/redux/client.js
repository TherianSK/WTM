import ApolloClient from 'apollo-client';
import { createNetworkInterface } from 'apollo-client';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

const wsClient = new SubscriptionClient('wss://subscriptions.graph.cool/v1/cj83703qu0fc00111ak01eh3r', {
  reconnect: true,
});

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj83703qu0fc00111ak01eh3r',
});

// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
	networkInterface,
	wsClient
);

export default new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  addTypename: true,
  queryDeduplication: false,
  dataIdFromObject: (result) => {
    if (result.id && result.__typename) {
      return result.__typename + result.id;
    }
    return null;
  },
});
