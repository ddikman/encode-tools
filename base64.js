const template = `<section>
<h2>BASE64</h2>
<p>Decoded string</p>
<textarea v-on:input="encode" v-model="decoded"></textarea>
<p>Encoded string</p>
<textarea v-on:input="decode" v-model="encoded"></textarea>
<p class="invalid" v-if="error"><small>{{ error}}</small></p>
</section>`

export default {
  template,
  data: function() {
    return {
      encoded: "",
      decoded: "",
      error: null
    }
  },
  methods: {
    encode: function() {
      this.error = null
      this.encoded = btoa(this.decoded)
    },
    decode: function() {
      this.error = null
      try {
        this.decoded = atob(this.encoded)
      } catch (err) {
        this.error = `Invalid base64 string: ${err.message}`
      }
    }
  }
}