# [LED Couture Project](https://flashylights.nl)

This is the main client-side React app and node.js/express server for an interactive wearables/fashion/art project.

---

![gif of umbrella, necklace, skirt in action](https://media.giphy.com/media/xT1R9Bl3WsCITbUVxe/giphy.gif)

---

#### Hardware:

* [Arduino + LED Umbrella](https://github.com/traumverloren/led-umbrella)
* [Arduino + LED Necklace](https://github.com/traumverloren/led-necklace)
* [Arduino + LED Skirt + TranspA](https://github.com/traumverloren/led-skirt)

---

#### Tech:

* Node, v9.2.0
* Express, v4.16.2
* React, v16
* Styled Components
* ~~SocketIO~~ \*
* MQTT Broker, [Aedes](https://github.com/mcollina/aedes)
* [MQTT.js](https://github.com/mqttjs/MQTT.js)

\* Originally, I built this using Socket.IO to send messages between the app and hardware. However, I found it really flaky on my hardware with lots of crashing. So, I explored other options, found MQTT as a great solution for my project's needs, and switched to that! ✌️

#### How it works:

![diagram showing how the app communicates](/public/led-couture-schema.png)

_Server:_

The server, built with node.js + Express, is deployed on Digital Ocean. It includes Aedes, a mqtt broker that implements the mqtt protocol, and allows you to run your own mqtt server within a node.js application. This server sits between the hardware & the web app.

_MQTT Broker:_

Using MQTT protocol, the broker allows clients (below) to subscribe to a topic. Mew messages in that topic will be published to the subscribed clients. In my case, the server will publish the state changes from the react app to the various hardware bits of my outfit when a user clicks on one of the LED programs.

_Clients:_

* [Web app](https://flashylights.nl)

Written using React, this client (aka MQTT PUBLISHER) is deployed on Digital Ocean along with the server. It's where a user can select a LED light program and then send it to my....

* [LED Necklace](https://github.com/traumverloren/led-necklace)

Written in C++(ish), this client (aka MQTT SUBSCRIBER) in my necklace! Powered by a Feather Huzzah and
52 Neopixel RGBW LEDs, it receives a message from the server after the
user selects a program on the web app and lights up with that program!

* [LED Umbrella](https://github.com/traumverloren/led-umbrella)

Written in C++(ish), this client (aka MQTT SUBSCRIBER) in my umbrella! Powered by a Feather Huzzah and
136 Neopixel RGBW LEDs, it receives a message from the server after the
user selects a program on the web app and lights up with that program!

* [LED Skirt](https://github.com/traumverloren/led-skirt)

Written in C++(ish), this client (aka MQTT SUBSCRIBER) in my necklace! Powered by a Feather Huzzah and
52 Neopixel RGBW LEDs, it receives a message from the server after the
user selects a program on the web app and lights up with that program!

---

Made with 💟 by [Stephanie](https://stephanie.lol)
