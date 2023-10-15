---
title: Adding New Audio
layout: page
parent: Audio
nav_order: 5
games: ['P4G']
---

{: .todo }
> Add information for P3P and P5R

{: .todo }
> Add information for new voice lines and sound effects

{: .todo }
> Update as BGME continues to be developed

{: .warning }
> This requires [BGME](https://discord.com/channels/746211612981198989/1089998902616395776/1089998902616395776), which is currently in development and only intended for personal use at this time. This guide will be updated when BGME is released.

# Music Addition
Music addition technically replaces existing audio files. This guide will be replacing Japanese voicelines used in the TV Listings, which the majority of players will not use mods for.

To add new music, follow the same procedure for replacing music, but replace IDs ranging from 679-836.

## Adding New Event Music
Data for BGM is stored as

```"Data": "00 00 00 00 00 00 00 00 00 00 00 00 00 00 XX XX 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00"```

where the `XX XX` denotes the BGM ID in hexadecimal.

Follow [the guide for changing event music](event-audio-editing), but call the ID of the corresponding song in hexadecimal. For example, to change event BGM to `679`, `680`, ..., change `XX XX` to `A7 02`, `A8 02`, ...

## Adding New Battle Music
Follow [the guide for changing battle music](audio-replacement), but instead of selecting from the default selection of battle BGMs, enter the ID of the new song added. Unlike with replacing the default BGM, you don't need to subtract 1 from the streaming ID. For example, to change a battle BGM to `00679_streaming`, `00680_streaming`, ..., change the music ID to `679`, `680`, ...