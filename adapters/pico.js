
const DEFAULT_LANG = 'en';
const VALID_LANG = {
  'en':    'en-US',
  'en-us': 'en-US',
  'en-gb': 'en-GB',
  'de':    'de-DE',
  'de-de': 'de-DE',
  'es':    'es-ES',
  'es-es': 'es-ES',
  'fr':    'fr-FR',
  'fr-ca': 'fr-FR',
  'fr-fr': 'fr-FR',
  'it':    'it-IT',
  'it-it': 'it-IT'
};

var fs = require('fs');
var tmp = require('tmp');
var spawn = require('child_process').spawn;


module.exports.stream = ttsStream;
module.exports.file = ttsFile;


//tmp.setGracefulCleanup();


function ttsStream(text, options, callback) {
  ttsFile(text, options, function (err, path) {
    var stream;

    if (!err) {
      stream = fs.createReadStream(path);

      // auto remove generated file!
      stream.on('close', function () {
        fs.unlink(path);
      });
    }

    callback(err, stream);
  })
}


function checkOptions(options, callback) {
  options = options || {};

  options.lang = options.lang || DEFAULT_LANG;

  if (!VALID_LANG[options.lang.toLocaleLowerCase()]) {
    return callback(new Error('Invalid lang `' + options.lang + '`'));
  }

  if (!options.tmpFile) {
    tmp.tmpName({ prefix: 'pico-', postfix: '.wav' }, function (err, path) {
      if (!err) {
        options.tmpFile = path;
      }

      callback(err, options);
    });
  } else {
    callback(null, options);
  }
}


function ttsFile(text, options, callback) {
  checkOptions(options, function (err, options) {
    var args;
    var pico;

    if (err) {
      return callback(err);
    }

    args = [ '-l', VALID_LANG[options.lang], '-w', options.tmpFile, text ];
    pico = spawn('pico2wave', args);

    pico.on('exit', function (code, signal) {
      var err = null;

      //console.log("***", code, signal);

      if (code) {
        err = new Error('Program terminated with code ' + code);
      }

      console.log(options.tmpFile);

      callback(err, !err && options.tmpFile);
    });

  });

}