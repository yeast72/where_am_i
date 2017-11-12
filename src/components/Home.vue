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
      <h2>Network Speed</h2>
      <table class="table table-striped" style="text-align: center;" align="center" id="block-table">
        <tbody>
          <tr>
            <th style="width: 33%;">Download Speed</th>
            <th style="width: 34%;">Upload Speed</th>
            <th style="width: 33%;">Ping</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
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
      }
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
