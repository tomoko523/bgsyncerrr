<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <button @click="sentMessage">POSTを実行する</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    sentMessage: function(){
      axios.post('http://httpbin.org/post')
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  height: 60px;
  width: 150px;
  font-size: 16px;
  font-weight: 600;
  background: yellow;
  border-style: none;
}
button:hover {
  opacity: 0.8;
}
</style>
