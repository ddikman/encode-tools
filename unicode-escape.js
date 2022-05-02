const template = `<section>
<h2>Unicode</h2>
<p><small>Escaping or unescaping unicode is effectively the same as using the URL escape.</small></p>
<p>Unescaped (raw)</p>
<textarea v-on:input="encode" v-model="decoded"></textarea>
<p>Escaped unicode</p>
<textarea v-on:input="decode" v-model="encoded"></textarea>
</section>`

export default {
  template,
  data: function() {
    return {
      encoded: "",
      decoded: ""
    }
  },
  mounted: function() {
    this.decoded = "Hello, world!"
    this.encode()
  },
  methods: {
    encode: function() {
      this.encoded = encodeURIComponent(this.decoded)
    },
    decode: function() {
      this.decoded = decodeURIComponent(this.encoded)
    }
  }
}