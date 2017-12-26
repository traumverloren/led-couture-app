import mqtt from "mqtt";

const client = mqtt.connect("wss://flashylights.nl", {
  clientId: "react-app"
});

export default client;
