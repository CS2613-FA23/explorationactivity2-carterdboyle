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

An optional sound for the sound font can be loaded from
```javascript
  track.addEvent(new MidiWriter.ProgramChangeEvent({instrument: 1}));
```
where a list of available sounds is found from https://magenta.github.io/magenta-js/music/demos/player.html#soundfonts and clicking the drop-down menu beside `sgm_plus`.
Instrument 0 corresponds to `ACOUSTIC_GRAND_PIANO` and 1 corresponds to `BRIGHT_ACOUSTIC_PIANO`, etc. 

The main functionality of the program is adding Notes,
