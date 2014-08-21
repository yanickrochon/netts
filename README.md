# Netts

Node Easy Text To Speech, using TTS without pain. This module is intended to support various engines with a seemless interface.


## Installation

```
npm install netts --save
```


## Usage

The following example uses Pico Text to Speech, the Google Android TTS engine.

```javascript
var picoTTS = require('netts').PicoTTS();

picoTTS.stream("Bonjour, monde!.", {
    lang: 'fr-FR'
}, function (err, stream) {
    // do whatever with the stream, as a WAVE format
}).
```

Available engine features are, with their proper signature :

* **stream** *(text, engineOptions, callback(err, stream))* 
* **file** *(text, engineOptions, callback(err, path))* 

**Note** : both `stream` and `file` types, format and encoding are TTS engine dependant.


## Supported Engines

* Pico Text To Speech


## Contribution

All contributions welcome! Every PR **must** be accompanied by their associated
unit tests!

Other engine adapters can be added to this project. Be sure that requirements and engine installations should be documented and not be part of `netts`' instalation process.


## License

The MIT License (MIT)

Copyright (c) 2014 Mind2Soft <yanick.rochon@mind2soft.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.