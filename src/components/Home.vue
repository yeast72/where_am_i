<template>
  <div class="hello" align="center">
    <h1>{{ msg }}</h1>
    <h2 id="ip_header">This is your ip {{info.ip}} </h2>
    <section class="centered-container side-padding">
      <gmap-map
      :center="center"
      :zoom="7"
      style="width: 620px; height: 300px">
      <gmap-marker
        :position="{lat: this.info.lat, lng: this.info.lon}">
      </gmap-marker>
    </gmap-map>
    <br>
      <table class="table table-striped" align="center">
        <tbody>
          <tr>
            <td>Network</td>
            <td v-if="info.network === ''">Doesn't found!</td>
            <td v-else>{{ info.network }}</td>
          </tr>
          <tr>
            <td>IP Name</td>
            <td v-if="info.ipName === ''">Doesn't found!</td>
            <td v-else>{{ info.ipName }}</td>
          </tr>
          <tr>
            <td>IP Type</td>
            <td v-if="info.ipType === ''">Doens't found!</td>
            <td v-else>{{ info.ipType}}</td>
          </tr>
          <tr>
            <td>City</td>
            <td v-if="info.city === ''">Doesn't found!</td>
            <td v-else>
              <a class="flag flag-th"></a>
              {{ info.city }}
            </td>
          </tr>
          <tr>
            <td>Coutry</td>
            <td v-if="info.country === '' && info.countryCode === ''">Doesn't found!</td>
            <td v-else>{{info.country}} / {{ info.countryCode }}</td>
          </tr>
          <tr>
            <td>Continent</td>
            <td v-if="info.continent === ''">Doesn't found!</td>
            <td v-else>{{info.continent}}</td>
          </tr>
          <tr>
            <td>Latitude / Longitude</td>
            <td v-if="info.lat === '' && info.lon === ''">Doesn't found!</td>
            <td v-else>{{info.lat}} / {{info.lon}}</td>
          </tr>
          <tr>
            <td>Postal Code</td>
            <td v-if="info.zip === ''">Does not found!</td>
            <td v-else>{{ info.zip }}</td>
          </tr>
        </tbody>
      </table>
      <br>
      <input id="textarea-ip" v-model="newIP" placeholder="New ip address or website" class="header">
      <input id="submit-btn" type="submit" class="btn btn_color_green btn_groupped_right" v-on:click="getIP(newIP)">
        <p/>See how your own network speed compares at
        <a href="http://speedsmart.net/?ipinfo">speedsmart.net</a>
      </p>
    </section>
    <v-dialog/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Welcome to Where am I',
      error: '',
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
        zip: '',
        continent: '',
        ipType: ''
      },
      newIP: '',
      center: {lat: '13.8362', lng: '100.5630'},
      markers: [{position: {lat: '', lng: ''}}]
    }
  },
  methods: {
    getInfoIP: function (ip) {
      axios.get('http://extreme-ip-lookup.com/json/' + ip)
      .then(response => {
        console.log(response)
        this.info.ipName = response.data.ipName
        this.info.ipType = response.data.ipType
        this.info.timezone = response.data.timezone
        this.info.country = response.data.country
        this.info.continent = response.data.continent
        this.info.countryCode = response.data.countryCode
      })
      .catch(e => {
        console.log(e)
      })
    },
    getIP: function (ip) {
      axios.get('http://ip-api.com/json/' + ip)
      .then(response => {
        console.log(response)
        if (response.data.status === 'success') {
          this.info.network = response.data.as
          this.info.ip = response.data.query
          this.info.zip = response.data.zip
          this.info.city = response.data.city
          this.info.lon = response.data.lon
          this.info.lat = response.data.lat
          this.center.lat = parseFloat(response.data.lat)
          this.center.lng = parseFloat(response.data.lon)
          this.markers[0].lat = parseFloat(response.data.lat)
          this.markers[0].lng = parseFloat(response.data.lon)
          // this.markers[1].lat = parseFloat(response.data.lat + 1)
          // this.markers[1].lng = parseFloat(response.data.lon + 1)
          this.getInfoIP(this.info.ip)
        } else {
          this.error = response.data.message.toUpperCase()
          this.show()
        }
      })
      .catch(e => {
        console.log(e)
      })
    },
    show: function () {
      if (this.error === 'PRIVATE RANGE') {
        this.$modal.show('dialog', {
          title: 'Your IP Address is in PRIVATE RANGES',
          text: 'A private IP address is an IP address that is reserved for internal use behind a router or other Network Address Translation (NAT) device, apart from the public.' +
          'The Internet Assigned Numbers Authority (IANA) reserves the following IP address blocks for use as private IP addresses' +
          ' 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255, 192.168.0.0 to 192.168.255.255',
          buttons: [
            { title: 'Close' }
          ]
        })
      } else {
        this.$modal.show('dialog', {
          title: 'Sorry, something went wrong!',
          text: 'Try Again',
          buttons: [
            { title: 'Close' }
          ]
        })
      }
    }
  },
  created () {
    this.getIP('')
  }
}
</script>
