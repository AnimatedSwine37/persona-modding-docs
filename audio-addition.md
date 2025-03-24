---
title: Adding New Music
layout: page
parent: Audio
nav_order: 3
games: ['P3P', 'P4G', 'P5R']
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
- [Phos Music Manager](https://github.com/T-PoseRatkechi/phos-music-manager/releases)
- [AtomEncd](https://drive.google.com/file/d/1Jx9NBu40XUcJb0U4MdsVjPV84UTzWcpy/view)
- (For P5R) [This script for encrypting ADX files](https://drive.google.com/file/d/1zHiVWwpjYipK-vrvUOAtCa9zplpel8km/view)
- (If unpacking/repacking AWB) [Sonic Audio Tools](https://github.com/blueskythlikesclouds/SonicAudioTools)

{: .todo }
> Add information for new voice lines and sound effects

## Introduction

Music addition (new songs not replacing any existing songs) is possible for the PC releases of P3P, P4G, and P5R using the [BGME Framework](https://gamebanana.com/mods/477399). To add new music, this mod must be downloaded and set as a dependency for your mod.

![]({%link assets/images/audio/r2_bgme.png %})

{: .info }
> Additional documentation on BGME can be found [here](https://t-poseratkechi.github.io/PersonaMusicScript/guides/create-mod).

## Adding New Music

There are two main ways to add new music in Persona games.

- [Phos Music Manager](https://github.com/T-PoseRatkechi/phos-music-manager/releases) is a music manager designed to simplify music replacement or addition in Persona 3 Portable (PC), Persona 4 Golden (PC x64), and Persona 5 Royal (PC). It automatically handles all steps needed to encode and export music.
- If you would rather manually add new music files, [AtomEncd](https://drive.google.com/file/d/1Jx9NBu40XUcJb0U4MdsVjPV84UTzWcpy/view) should be used instead.


{% tabs addmusic %}

{% tab addmusic Phos Music Manager %}
## Adding New Music Files

{: .info }
> More detailed documentation on the Phos Music Manager can be found [here](https://t-poseratkechi.github.io/PersonaMusicScript/guides/music-manager).

To add new music files to your project, click on the + icon next to the Build button.

![]({%link assets/images/audio/phosnewtrack.png %})

A popup will open where you can enter details about the new song you are adding.
- Name: the name of the track
- Category (optional): the category shown in caps (ex: Regular Battles, Events, etc.). This is purely for organizational purposes.
- Tags (optional): any tags to more clearly detail what the track is for (ex: Normal, Results Screen, etc.). This is purely for organizational purposes.
- Output Path: the file path of the exported file.
- Encoder: the encoder that should be used for the exported file.

![]({%link assets/images/audio/phosaddtrack.png %})

The output path and encoder depend on the game being modded.

{% tabs phostrackconfig %}
{% tab phostrackconfig P4G %}
### Output Path
The output path should be set to `FEmulator/AWB/snd00_bgm.awb/songID.hca`, where `songID.hca` is the ID of the new track you are adding. Use IDs ranging from 678 up to 835 for new music.

{: .info }
> If you want your mod to be compatible with existing BGME music mods, make sure to check what IDs those mods are using. [Music Enhancement Pack](https://gamebanana.com/sounds/49693) uses IDs 679-692, [Anime Music Expansion](https://gamebanana.com/mods/475152) uses IDs 775-821, and [Restored Game Over Music](https://gamebanana.com/sounds/71006) uses ID 774.

### Encoder
The encoder should be set to HCA.
{% endtab %}

{% tab phostrackconfig P5R %}
### Output Path
The output path should be set to `FEmulator/AWB/BGM_42.AWB/songID.ADX`, where `songID.ADX` is the ID of the new track you are adding. Use IDs ranging from 0 up to 9999 for new music.

### Encoder
The encoder should be set to ADX (Persona 5 Royal PC). If you do not have this option, follow [this guide](audio-replacement#p5r-adx-encryption) to install it.
{% endtab %}

{% tab phostrackconfig P3P %}
### Output Path
The output path should be set to `P5REssentials\CPK\Phos Music Manager\data\sound\bgm\songID.ADX`, where `songID.ADX` is the ID of the new track you are adding. Any new ID up to 99999999999 is supported.

{: .info }
> Using IDs larger than 1000 is recommended to avoid crashes.

### Encoder
The encoder should be set to ADX.
{% endtab %}
{% endtabs %}



{% endtab %}

{% tab addmusic Manual (AtomEncd) %}
## Encoding Music
Follow the process to [replace audio using AtomEncd](audio-replacement#encoding-audio-with-atomencd).

## Adding Music to your Mod
Audio files should be placed in the proper directory depending on what game you are modding.

{% tabs awbemulator %}

{% tab awbemulator P4G %}
Place your audio file in `FEmulator/AWB/snd00_bgm.awb/songID.hca`, where `songID.hca` is the ID of the new track you are adding. Use IDs ranging from 678 up to 835 for new music.

{: .info }
> If you want your mod to be compatible with existing BGME music mods, make sure to check what IDs those mods are using. [Music Enhancement Pack](https://gamebanana.com/sounds/49693) uses IDs 679-692, [Anime Music Expansion](https://gamebanana.com/mods/475152) uses IDs 775-821, and [Restored Game Over Music](https://gamebanana.com/sounds/71006) uses ID 774.
{% endtab %}

{% tab awbemulator P5R %}
Place your audio file in `FEmulator/AWB/BGM_42.AWB/songID.ADX`, where `songID.ADX` is the ID of the new track you are adding. Use IDs ranging from 0 up to 9999 for new music.
{% endtab %}

{% tab awbemulator P3P %}
Place your audio file in `P5REssentials\CPK\Phos Music Manager\data\sound\bgm\songID.ADX`, where `songID.ADX` is the ID of the new track you are adding. Any new ID up to 99999999999 is supported.

{: .info }
> Using IDs larger than 1000 is recommended to avoid crashes.
{% endtab %}
{% endtabs %}


{% endtab %}
{% endtabs %}

## Using New Music

New music can be used right away in [events](/persona-modding-docs/events/) and [flowscript](/persona-modding-docs/flowscript/) by calling their IDs. To change battle music using BGME, follow [the guide here](battle-music).