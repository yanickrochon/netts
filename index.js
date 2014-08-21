
// see: http://elinux.org/RPi_Text_to_Speech_(Speech_Synthesis)

module.exports.PicoTTS = function () {
  return require('./adapters/pico');
};




module.exports.PicoTTS().stream('Bonjour!', { lang: 'fr' }, function (err, stream) {
  console.log("Done!", err);

  stream.on('data', function (data) {
    console.log("*** DATA", data.length);
  });
});