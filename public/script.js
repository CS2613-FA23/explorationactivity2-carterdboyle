import MidiWriter from "https://cdn.skypack.dev/midi-writer-js@2.1.4"
var tracks = [];

// Lead Instrument
tracks[0] = new MidiWriter.Track();
tracks[0].addEvent(new MidiWriter.ProgramChangeEvent({instrument : 24}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], repeat: 4, duration: '1', velocity:0}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], repeat: 1, duration: '1', velocity:50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 1, duration: '2', velocity:50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], repeat: 1, duration: '2', velocity:50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['D4'], repeat: 1, duration: '1', velocity:50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], repeat: 1, duration: '2', velocity:50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 1, duration: '2', velocity:50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], repeat: 1, duration: '1', velocity:50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['D5'], repeat: 1, duration: '2', velocity:50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['C5'], repeat: 1, duration: '2', velocity:50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 1, duration: '1', velocity:50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['C5'], repeat: 1, duration: '2', velocity:50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 1, duration: '2', velocity:50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], repeat: 1, duration: '1', velocity:50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 1, duration: '2', velocity:50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], repeat: 1, duration: '2', velocity:50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['D4'], repeat: 1, duration: '1', velocity:50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], repeat: 1, duration: '2', velocity:50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 1, duration: '2', velocity:50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], repeat: 1, duration: '1', velocity:50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['D5'], repeat: 1, duration: '2', velocity:50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['C5'], repeat: 1, duration: '2', velocity:50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 1, duration: '1', velocity:50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['C5'], repeat: 1, duration: '2', velocity:50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 1, duration: '2', velocity:50}));

// Bass
tracks[1] = new MidiWriter.Track();
tracks[1].addEvent(new MidiWriter.ProgramChangeEvent({instrument: 33}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E3'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E3'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E3'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E3'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E3'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], repeat: 3, duration: '8', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], repeat: 5, duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], repeat: 3, duration: '8', velocity:50}));

// Voice
tracks[2] = new MidiWriter.Track();
tracks[2].addEvent(new MidiWriter.ProgramChangeEvent({instrument: 52}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], repeat: 12, duration: '1', velocity:0}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['B5'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['A5'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['G5'], duration: '4', velocity: 50}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['F#5'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['G5'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['E5'], duration: '4', velocity: 50}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['D#5'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['E5'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['F#5'], duration: '4', velocity: 50}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], duration: '1', velocity: 50}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['C5'], duration: '2', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['D5'], wait: '8', duration: '4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['E5'], duration: '8', velocity: 50}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], duration: '1', velocity: 50}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '2', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], wait: '8', duration: '4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '8', velocity: 50}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['G#4'], duration: '1', velocity: 50}));

// Part B ------------------------------------------------------------------------------------

// Guitar

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));


tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], repeat: 2, duration: '8', velocity: 50}));


tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#5'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E5'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#5'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#5'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E5'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#5'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B4'], repeat: 2, duration: '8', velocity: 50}));


tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], repeat: 2, duration: '8', velocity: 50}));


tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#5'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E5'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#5'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#5'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E5'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#5'], repeat: 2, duration: '8', velocity: 50}));

//

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));


tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));


tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], duration: '8', velocity: 50}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));

// Bass

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));


tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));


tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], repeat: 2, duration: '8', velocity: 50}));


tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], repeat: 2, duration: '8', velocity: 50}));


tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], repeat: 2, duration: '8', velocity: 50}));

//

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));


tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], repeat: 2, duration: '8', velocity: 50}));


tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#3'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#3'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], repeat: 2, duration: '8', velocity: 50}));


tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A2'], repeat: 2, duration: '8', velocity: 50}));


tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#3'], repeat: 2, duration: '8', velocity: 50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#3'], repeat: 2, duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E3'], duration: '8', velocity: 50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F#3'], repeat: 2, duration: '8', velocity: 50}));

// Vox

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['F#3'], repeat: 10, duration: '1', velocity: 0}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], duration: '4', velocity: 50}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], duration: '4', velocity: 50}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], duration: '4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], duration: '4', velocity: 50}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['C4'], duration: '4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], duration: '4', velocity: 50}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], duration: '4', velocity: 50}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], duration: '4', velocity: 50}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], duration: '4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], duration: '4', velocity: 50}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['F#4'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], duration: 'd4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['C4'], duration: '4', velocity: 50}));
tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['B3'], duration: '4', velocity: 50}));

tracks[2].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '1', velocity: 60}));


let write = new MidiWriter.Writer(tracks)

let player = document.getElementById("player")
player.src = write.dataUri()

