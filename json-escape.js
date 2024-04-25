const template = `<section>
<h2>JSON</h2>
<p>Unescaped (raw) json</p>
<textarea v-on:input="encode" v-model="decoded"></textarea>
<p>Escaped json</p>
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
    this.decoded = '"some string with "quotes" and a backslash \\ and a newline \\n"'
    this.encode()
  },
  methods: {
    encode: function() {
      this.encoded = JSON.stringify(this.decoded)
    },
    decode: function() {
      this.decoded = JSON.parse(this.encoded)
    }
  }
}