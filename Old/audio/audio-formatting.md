---
title: Audio Editing and Formatting
layout: page
parent: Audio
nav_order: 1
games: ['P3F', 'P3P', 'P4G', 'P4G Vita', 'P5R']
---

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Tools You'll Need
- The audio you're adding in WAV format
- [Audacity](https://www.audacityteam.org/download/)
- (Recommended for listening) [Foobar2000](https://www.foobar2000.org/download)

## Location and Format

The location and format of audio files depends on the game being modded.

- P3F: audio is stored as loose ADX files in `BGM.CVM`.
- P3P: audio is stored as loose ADX files in `data/umd1.cpk/data/sound`.
- P4G: audio is stored as HCA files packed within AWB archives in `data.cpk/sound/adx2`. Some AWB archives come in pairs with associated ACB files.
- P5R: audio is stored as ADX files packed within ACB archives in `sound_e.cpk` for English voices, `sound_j.cpk` for Japanese voices, and `base.cpk/sound` for all other sounds. Some AWB archives come in pairs with associated ACB files.

## Audio Editing

Music and certain sound effects use defined loops so they can play continuously as long as they are needed. If editing such audio files, you need to set up a proper loop. In some cases, this is as simple as defining a start and end point, and in other cases more advanced audio editing needs to be done in order to ensure a clean loop.

{: .todo }
Add a section for basic audio editing. Maybe add a section for advanced audio editing

If replacing looped sound such as music or some audio effects, open your replacement audio file in [Audacity](https://www.audacityteam.org/download/) in order to find the song's loop point. To do this, select the start and end of the section of song you want to loop, then set the selection toolbar (at the bottom of the screen) to "Start and End of Selection" with the time displayed as samples.

![]({%link assets/images/audio/audacity.png %})

Mark down the start and end points somewhere, as you will use them when encoding the song. Export the file as a .wav.