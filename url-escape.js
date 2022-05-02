const template = `<section>
<h2>URL parameter</h2>
<p>Unescaped (raw) url</p>
<textarea v-on:input="encode" v-model="decoded"></textarea>
<p>Escaped url</p>
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
    this.decoded = 'https://greycastle.se/'
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