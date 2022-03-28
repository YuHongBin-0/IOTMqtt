import { Component } from '@angular/core';
import * as mqtt from "mqtt" 
// https://github.com/mqttjs/MQTT.js

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  constructor() {
    const mqtt = require('mqtt')
    const client  = mqtt.connect('')

    client.on('connect', function () {
      client.subscribe('presence', function (err) {
        if (!err) {
          client.publish('presence', 'Hello mqtt')
        }
      })
    })
    
    client.on('message', function (topic, message) {
      // message is Buffer
      console.log(message.toString())
      client.end()
    })
  }

}
