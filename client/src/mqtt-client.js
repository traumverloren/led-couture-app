import mqtt from "mqtt";

const client = mqtt.connect(
  `wss://${process.env.REACT_APP_KEY}:${
    process.env.REACT_APP_TOKEN
  }@broker.shiftr.io`,
  {
    clientId: "javascript"
  }
);

export default client;
