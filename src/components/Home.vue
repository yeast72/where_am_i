<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 id="ip_header">This is your ip {{info.ip}} </h2>
    <section class="centered-container side-padding">
      <gmap-map
      :center="center"
      :zoom="7"
      style="width: 500px; height: 300px">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
      <table class="table table-striped" align="center">
        <tbody>
          <tr>
            <td>Network</td>
            <td>{{ info.network }}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>
              <a class="flag flag-th"></a>
              {{ info.city }}
            </td>
          </tr>
          <tr>
            <td>Coutry</td>
            <td> {{info.country}} / {{ info.countryCode }} </td>
          </tr>
          <tr>
            <td>Latitude/Longitude</td>
            <td> {{info.lat}} / {{info.lon}} </td>
          </tr>
          <tr>
            <td>Postal Code</td>
            <td> {{ info.zip }} </td>
          </tr>
        </tbody>
      </table>
      <input id="textarea-ip" v-model="ip" placeholder="New ip address." class="header">
      <input id="submit-btn" type="submit" class="btn btn_size_big btn_color_green btn_groupped_right" v-on:click="getNewIP(this.textarea-ip.value)">
      <p>
        "The average network speed for
        <b>...</b>
         in
        <b>...</b>
         is shown above. See how your own network speed compares at
        <a href="http://speedsmart.net/?ipinfo">speedsmart.net</a> "
      </p>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCNQ60BFvx4nY-EpQVOJ8w3q3v42XsKQe8'
  }
})
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Welcome to Where am I',
      info: {
        ip: '',
        city: '',
        region: '',
        country: '',
        network: '',
        countryCode: '',
        lat: '',
        lon: '',
        timezone: '',
        zip: ''
      },
      center: {lat: '', lng: ''},
      markers: [{position: {lat: '', lng: ''}}, {position: {lat: 11.0, lng: 11.0}}]
    }
  },
  methods: {
    getInfoIP: function () {
      console.log('ip')
      axios.get('http://extreme-ip-lookup.com/json/158.108.216.5')
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log(e)
      })
    },
    getIP: function () {
      axios.get('http://ip-api.com/json')
      .then(response => {
        console.log(response)
        this.info.city = response.data.city
        this.info.network = response.data.as
        this.info.country = response.data.country
        this.info.countryCode = response.data.countryCode
        this.info.ip = response.data.query
        this.info.timezone = response.data.timezone
        this.info.lat = response.data.lat
        this.info.lon = response.data.lon
        this.info.zip = response.data.zip
        this.center.lat = parseFloat(response.data.lat)
        this.center.lng = parseFloat(response.data.lon)
        this.markers[0].lat = parseFloat(response.data.lat)
        this.markers[0].lng = parseFloat(response.data.lon)
        this.markers[1].lat = parseFloat(response.data.lat) + 1
        this.markers[1].lng = parseFloat(response.data.lon) + 1
        this.getInfoIP()
      })
      .catch(e => {
        console.log(e)
      })
    }
  },
  created () {
    this.getIP()
  }
}
</script>
