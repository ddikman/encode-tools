const template = `<section>
<h2>HTML</h2>
<p>Unescaped (raw) html</p>
<textarea v-on:input="encode" v-model="decoded"></textarea>
<p>Escaped html</p>
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
  methods: {
    encode: function() {
      this.encoded = $('<textarea/>').text(this.decoded).html()
    },
    decode: function() {
      this.decoded = $('<textarea/>').html(this.encoded).text()
    }
  }
}