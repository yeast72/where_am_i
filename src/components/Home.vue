<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 id="ip_header">This is your ip</h2>
    <section class="centered-container side-padding">
      <table class="table table-striped" align="center">
        <tbody>
          <tr>
            <td>Network</td>
            <td>
              <a href="/AS9411">AS9411</a>
              "Kasetsart University, Thailand"
            </td>
          </tr>
          <tr>
            <td>City</td>
            <td>
              <a class="flag flag-th"></a>
            </td>
          </tr>
          <tr>
            <td>Latitude/Longitude</td>
            <td></td>
          </tr>
          <tr>
            <td>Postal Code</td>
            <td></td>
          </tr>
          <tr>
            <td>Route</td>
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
      msg: 'Welcome to Where am I'
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
      axios.get('http://freegeoip.net/json/')
      .then(response => {
        console.log(response)
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
