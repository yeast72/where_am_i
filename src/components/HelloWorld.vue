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
    <!-- <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Where am I'
    }
  }
}
</script>
