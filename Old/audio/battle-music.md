---
title: Battle Music Editing
layout: page
parent: Audio
nav_order: 4
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

## Introduction

Changing battle music beyond what is provided in the stock games is possible for the PC releases of P3P, P4G, and P5R using the [BGME Framework](https://gamebanana.com/mods/477399). To allow for advanced BGM changing, this mod must be downloaded and set as a dependency for your mod.

![]({%link assets/images/audio/r2_bgme.png %})

BGME provides a convenient scripting language that can be used to add new battle music or change how existing battle music is called, etc. To use this, create a new folder in your mod directory called `BGME`. In this folder, create a new text file called `(script name).pme`, where `(script name)` can be replaced with a name of your choice. This can be done in the same file used for [custom event music](/persona-modding-docs/events/BGME-events) if desired.

{: .info }
> When the game is booted, a `(script name).project` file is generated. This can be loaded into Phos Music Manager. More information can be found [here](https://t-poseratkechi.github.io/PersonaMusicScript/guides/music-manager).

## BGME documentation

[The BGME Framework has its own, detailed documentation that can be found here](https://t-poseratkechi.github.io/PersonaMusicScript). It is highly recommended to use this documentation to learn how to use BGME's features. This page will include a few examples of what BGME is capable of.

## Examples of BGME's features

### Randomized Battle Music (Normal Battles)

Random battle music can be set using `random_song(minID, maxID)`, which will play randomized music in a range between (and including) `minID` and `maxID`.

```
encounter["Normal Battles"]:
  music = random_song(minID, maxID)
end
```

### Changing Music for Specific Encounters

Unique music for specific encounters can be set by setting the desired music ID to play for that battle.

```
encounter[encounterID]
  music = songID
end
```

A list of premade BGME IDs referred to as *collections* can be found [here](https://t-poseratkechi.github.io/PersonaMusicScript/docs/collections). Encounter IDs can be found on the Amicitia wiki for [Persona 3 Portable](https://amicitia.miraheze.org/wiki/Persona_3_Portable/Encounters), [Persona 4 Golden](https://amicitia.miraheze.org/wiki/Persona_4_Golden/Encounters), and [Persona 5 Royal](https://amicitia.miraheze.org/wiki/Persona_5_Royal/Encounters).

### Setting Normal, Advantage, and Disadvantage Battle Music

BGME can set unique music for normal battles, player advantage battles, and enemy advantage battles. This functionality is already seen in stock Persona 4 Golden (Reach Out To The Truth for player advantage, Time To Make History for normal/enemy advantage) and Persona 5 Royal (Take Over for player advantage, Last Surprise for normal/enemy advantage), but BGME expands on it.

```
encounter["Normal Battles"]:
	music = battle_bgm(normalID, advantageID, disadvantageID)
end
```

`normalID` plays the chosen song ID for a normal battle, `advantageID` plays the chosen song ID for a player advantage battle, and `disadvantageID` plays the chosen song ID for an enemy advantage battle.

Alternatively, these calls can be used individually:
```
encounter["Normal Battles"]:
	victory_music = songID_1
	normal_bgm = songID_2
	victory_normal_bgm = songID_3
	advantage_bgm = songID_4
	victory_advantage_bgm = songID_5
	disadvantage_bgm = songID_6
	victory_disadvantage_bgm = songID_7
end
```

## Editing ENCOUNT.TBL

{: .warning }
> For most cases, BGME should be used instead. Ignore this unless you know what you're doing!

If you want to manually edit battle music calls without using BGME, you can edit `ENCOUNT.TBL`. for Persona 3 FES, Persona 4, Persona 3 Portable, and Persona 4 Golden is stored in `init_free.bin/battle/ENCOUNT.TBL`. Editing this file requires the use of [010 Editor](https://www.sweetscape.com/010editor/) and [several templates](https://github.com/tge-was-taken/010-Editor-Templates) designed for file types supported by the Persona games. Extract these templates to a separate folder.

Extract `ENCOUNT.TBL` using Amicitia or Persona Editor, then open it in 010 Editor. By running a template on it, we can use a more readable format. Open a template by clicking the Run Template button, then the Open Template button, or press `Ctrl + F5`.

![]({%link assets/images/events/010_template.png %})

Open your 010 templates folder and select the correct template. For example, P4G's TBL template is located in `/templates/p4g_tbl.bt`. This will run the template on the file you have open and present it in a more readable format as shown below.

![]({%link assets/images/audio/010_encount.png %})

Expanding the drop downs shows the following data:
- Enemy Encounters\[x\]: x represents the encounter ID. A list of encounter IDs can be found on [Amicitia wiki](https://amicitia.miraheze.org/wiki/Persona_4_Golden/Encounters).
- Music: the selected battle music.
- u16 Field04: Set to 1 to enable BGME, so that different music plays in a given encounter.

The default selection of battle BGM is shown below.

![]({%link assets/images/audio/010_default_battle_bgm.png %})