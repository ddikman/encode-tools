const template = `<section>
<h2>HTML</h2>
<p>Unescaped (raw) html</p>
<textarea class="half-height" v-on:input="encode" v-model="decoded"></textarea>
<p>Escaped html</p>
<textarea class="half-height" v-on:input="decode" v-model="encoded"></textarea>
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
    this.decoded = '<p>Hello</p>'
    this.encode()
  },
  methods: {
    encode: function() {
      this.encoded = $('<textarea/>').text(this.decoded).html()
    },
    decode: function() {
      this.decoded = $('<textarea/>').html(this.encoded).text()
    }
  }
}