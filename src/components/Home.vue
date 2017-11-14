<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 id="ip_header">This is your ip {{info.ip}} </h2>
    <section class="centered-container side-padding">
      <table class="table table-striped" align="center">
        <tbody>
          <tr>
            <td>Network</td>
            <td>{{ info.network }}</td>
          </tr>
          <tr>
            <td>IP Name</td>
            <td> {{ info.ipName }} </td>
          </tr>
          <tr>
            <td>IP Type</td>
            <td> {{ info.ipType}} </td>
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
            <td>Continent</td>
            <td>{{info.continent}} </td>
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
      <input id="textarea-ip" v-model="newIP" placeholder="New ip address or website" class="header">
      <input id="submit-btn" type="submit" class="btn btn_color_green btn_groupped_right" v-on:click="getIP(newIP)">
        <p/>See how your own network speed compares at
        <a href="http://speedsmart.net/?ipinfo">speedsmart.net</a> 
      </p>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
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
        zip: '',
        continent: '',
        ipType: ''
      },
      newIP: ''
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
        this.info.lat = response.data.lat
        this.info.lon = response.data.lon
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
        this.info.network = response.data.as
        this.info.ip = response.data.query
        this.info.zip = response.data.zip
        this.info.city = response.data.city
        this.getInfoIP(this.info.ip)
      })
      .catch(e => {
        console.log(e)
      })
    }
  },
  created () {
    this.getIP('')
  }
}
</script>
