import mqtt from "mqtt";

const client = mqtt.connect(`ws://${process.env.REACT_APP_MQTT_IP}`, {
  clientId: "react-app"
});

export default client;
