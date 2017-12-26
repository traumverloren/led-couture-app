import mqtt from "mqtt";

const client = mqtt.connect("mqtts://flashylights.nl:8888", {
  clientId: "react-app"
});

export default client;
