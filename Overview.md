# Which package/library was selected?

The package selected to be the main focus was the`midi-writer-js` package, but some additional packages were required to create a working sample program to showcase the functionality of `midi-writer-js`, namely `html-midi-player` but that will not be the focus. 

# What is it?

`midi-writer-js` is a package that allows the user to create MIDI tracks and write NoteEvents to them in an expressive way to create music. This MIDI data can be then fed into a MIDI player or another application like Max that would allow the use to further manipulate it. 

To use the package first import the package by calling 
```javascript 
  import MidiWriter from "https://cdn.skypack.dev/midi-writer-js@2.1.4"
```
Creating a track can be done with
```javascript
  const track = new MidiWriter.Track();
```
The track has additional properties which can be set with:
```javascript
  addEvent({event}, mapFunction)
  setTempo(tempo)
  addText(text)
  addCopyright(text)
  addTrackName(text)
  addInstrumentName(text)
  addMarker(text)
  addCuePoint(text)
  addLyric(text)
  setTimeSignature(numerator, denominator)
```
These are all relatively self-explanatory and won't be discussed in detail except for addEvent, which is the most important. The other functions are information attached to the MIDI data that describe properties of the track that don't affect the way it sounds, with the exception of tempo, which controls how fast the piece is performed.

An optional sound for the sound font can be loaded from
```javascript
  track.addEvent(new MidiWriter.ProgramChangeEvent({instrument: 1}));
```
where a list of available sounds is found from https://magenta.github.io/magenta-js/music/demos/player.html#soundfonts and clicking the drop-down menu beside `sgm_plus`.
Instrument 0 corresponds to `ACOUSTIC_GRAND_PIANO` and 1 corresponds to `BRIGHT_ACOUSTIC_PIANO`, etc. 

The main functionality of the program is adding NotesEvents, by using the track's .addEvent() function.

The MIDI spec defines that each note must have a `NoteOnEvent` and `NoteOffEvent` or (`NoteOnEvent` with zero velocity) marking the beginning and end of the note. The `NoteEvent` allows a more intuitive way to ascribe these events by using note durations. A `NoteEvent` is created with `MidiWriter.NoteEvent({options})` with the following options:

| Name       | Type            | Default | Description                                                                                                                 |
| ---------- | --------------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| pitch      | string or array |         | Each pitch can be a string or valid MIDI note code. Format for string is `C#4`                                              |
| duration   | string or array |         | How long the note should sound <ul><li>1 :whole</li><li>2 :half</li><li>d2: dotted half</li><li>dd2: double dotted half</li><li>4 :quarter</li><li>4t :quarter triplet</li><li>d4 :dotted quarter</li><li>dd4 :double dotted quarter</li><li>8 :eighth</li><li>8t :eighth triplet</li><li>d8: dotted eighth</li><li>double dotted eighth</li><li>16 :sixteenth</li><li>16t :sixteenth triplet</li><li>16t :sixteenth triplet</li><li>32 :thirty-second</li><li>64: sixty-fourth</li><li>Tn :where n is an explicity number of ticks (T128 = 1 beat)</li></ul><p>If an array of durations is passed then the sum of the durations will be used.</p>                                                                                                                 | 
| wait       | string or array | `0`     | How long to wait before sound note (rest). Takes same values as **duration**.                                               |
| sequential | boolean         | `false` | If `true` then array of pitches will be played sequentially instead of simultaneously.                                      |
| velocity   | number          | `50`    | How loud the note should sound, values `1-100`.                                                                             |
| repeat     | number          | `1`     | How many times this event should be repeated.                                                                               |
| channel    | number          | `1`     | MIDI channel to use.                                                                                                        |
| grace      | string or array |         | MIDI channel to use.                                                                                                        |
| tick       | number          |         | Specific tick where this event should be played. If this parameter is supplied then `wait` is disregarded if also supplied. |

`MidiWriter.Writer(tracks)` contains a few ways to output the file:

* `buildFile()` *Uint8Array*
* `base64()` *string*
* `dataUri()` *string*
* `stdout()` *file stream (cli)*

# When was the package created?

It was created in Mar 2016 by grimmdude and has continued to be updated. 

# Why did I select this package?

I selected this package because I love music and wanted to experiment with creative ways to make it in javascript. 

# How did learning this package influence my learning of the language?

I learned how to run a node express server and the intricacies and differences between loading an npm module locally and loading from a url location in normal Javascript/Typescript. I learned more about modules and the `import` statement and how to debug code using Firefox's Developer console. I also learned about linking HTML fills with Node.js and how to get elements from the HTML. 

# Overall experience?

Overall, my experience was good, except for some of the learning curves that came with using a web server, which I don't have much experience using. I would recommend the package for someone looking find a way to create MIDI programmatically. I can imagine that programmatically making MIDI based on an alorithm would be a cool experiment. It does take a long time however, instead of using other MIDI software, like Guitar Pro, for example, but it is free and relatively quick and provides functionality to link with a player like I have demonstrated in my example. I would continue using the package if I had any ideas for making programmatic MIDI songs. 





