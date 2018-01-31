import mqtt from "mqtt";

const client = mqtt.connect("mqtts://flashylights.nl");

export default client;
