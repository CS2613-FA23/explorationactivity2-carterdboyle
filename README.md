# ExplorationActivity2

## Which package/library does the sample program demonstrate?

The sample program demonstrates the `midi-writer-js` package for use in JavaScript applications.

## How does someone run the program?

To run the program, change directory to the root of the project and install express using npm by entering ```npm install express``` in a terminal.

After that start the express server by entering in ```node app.js``` in a terminal in the same directory.

Open a web browser and navigate to `localhost:5000/` to start the web app. 

## What purpose does the program serve?

The program shows how the `midi-writer-js` package can be used to create a musical piece using MIDI writing capabilites and how it can be leveraged using javascript and additional packages to create a web app to play it back.

## Sample input/output?

There is no input and output directly, the user must create their own MIDI NoteEvents in the script.js file in the public folder. The output is created automatically and it is a `dataUri` string that the player reads in in order to play the sounds back.

## Input:

Create a track and change the instrument to a Bass guitar and create one `E4` note with velocity `50`.

```javascript
  track = new MidiWriter.Track();
  track.addEvent(new MidiWriter.ProgramChangeEvent({instrument : 24}));
  track.addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], repeat: 1, duration: '1', velocity:50}));
```

## Output:

Output is a MIDI Uri:

```data:audio/midi;base64,TVRoZAAAAAYAAAABAIBNVHJrAAAAEADAGACQQECEAIBAQAD/LwA=```

Which can then be fed into the desired MIDI player tool.



