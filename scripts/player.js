
// major scale
var freqs = [
  130.8127826502993,
  146.8323839587038,
  164.81377845643496,
  174.61411571650194,
  195.99771799087463,
  220,
  246.94165062806206,
  261.6255653005986
];

var synth = T("OscGen", {wave:"saw", mul:0.25}).play();

module.exports = {
  // play note in the major scale
  playNote: function (n) {
    if (n < 0 || n > 8) throw new Error('Note out of bounds of the major scale');
    synth.noteOnWithFreq(freqs[n - 1], 100);
  }
}
