# [Umbrella LED Couture Project](https://flashylights.nl)

This is the main client-side app and nodejs/express server fr an interactive
wearables/fashion/art project for wearing during the Light My Ride annual
lighted bike ride event in Amsterdam.

---

#### Hardware:

* [Arduino + LED Umbrella](https://github.com/traumverloren/led-umbrella)
* [Arduino + LED Necklace](https://github.com/traumverloren/led-necklace)
* More TBA

---

#### Software:

* Node, v9.2.0
* Express, v4.16.2
* SocketIO
* HTML
* CSS/Sass
* Vanilla JS

---

#### How it works:

![diagram showing how the app communicates](/public/umbrella-couture-schema.png)

_Server:_

The server, built with Express, is deployed on Heroku. It sits between the
hardware & the web app.

Using SocketIO, it pushes the state change from the web page to the various bits
of my outfit when a user clicks on one of the LED programs.

_Clients:_

* [Web app](https://flashylights.nl)

Written in HTML/CSS/vanilla JS, this client is deployed on Heroku along with the
server. It's where a user can select a LED light program and then send it to my

* [LED Necklace](https://github.com/traumverloren/led-necklace)

Written in C++(ish), this client in my necklace! Powered by a Feather Huzzah and
52 Neopixel RGBW LEDs, it receives a message from the Express server after the
user selects a program on the web app and then lights up with that program!

* [LED Umbrella](https://github.com/traumverloren/led-umbrella)

Written in C++(ish), this client in my umbrella! Powered by a Feather Huzzah and
136 Neopixel RGBW LEDs, it receives a message from the Express server after the
user selects a program on the web app and then lights up with that program!

* More TBA...

---

Made with 💟 by [Stephanie](https://stephanie.lol)
