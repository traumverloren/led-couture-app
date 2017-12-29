import mqtt from "mqtt";

const client = mqtt.connect("mqtts://flashylights.nl", {
  clientId: "react-app"
});

export default client;
