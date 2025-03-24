---
title: BGME Event Music Editing
layout: page
parent: Events
nav_order: 4
games: ['P4G']
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

The [BGME Framework](https://gamebanana.com/mods/477399) provides basic event music editing functionality. It has some advantages over [manually editing the event files](event-audio-editing-pmx), such as easier to read syntax and hot reload, which allows you to edit and test events in real time. However, it is incapable of doing more advanced edits at this time; for these, [directly editing the .PM2 and .PM3 files](event-audio-editing-pmx) is necessary. Regardless of how you edit events, BGME's event information logging and hot reload features are very helpful in the making of event music mods.

Editing events with BGME is done using a convenient scripting language that can be used to quickly and easily edit event music calls. To use this, create a new folder in your mod directory called `BGME`. In this folder, create a new text file called `(script name).pme`, where `(script name)` can be replaced with a name of your choice. This can be done in the same file used for [custom battle music](/persona-modding-docs/audio/battle-music) if desired.

{: .info }
> When the game is booted, a `(script name).project` file is generated. This can be loaded into Phos Music Manager. More information can be found [here](https://t-poseratkechi.github.io/PersonaMusicScript/guides/music-manager).

To use this functionality, BGME must be downloaded and set as a dependency for your mod.

![]({%link assets/images/audio/r2_bgme.png %})

## BGME documentation

[The BGME Framework has its own, detailed documentation that can be found here](https://t-poseratkechi.github.io/PersonaMusicScript/docs). It is highly recommended to use this documentation to learn how to use BGME's features. This page will include a few examples of what BGME is capable of.

## Enabling Event Information

To enable event information, which prints out additional information in the Reloaded-II console to help with event editing, select BGME Framework in Reloaded-II and click Configure Mod. Set the logging level to Debug.

![]({%link assets/images/events/r2_bgme_debug.png %})

## Hot Reload

To enable hot reload, which allows event changes to update in real time to help with event editing, select BGME Framework in Reloaded-II and click Configure Mod. Enable Hot Reload.

![]({%link assets/images/events/r2_bgme_hotreload.png %})

Similarly, CRI FileSystem V2 Hook should also have Hot Reload enabled.

![]({%link assets/images/events/r2_crifs_hotreload.png %})

## Editing Events

Find the event that you want to edit. For Persona 4 Golden, many of the events are documented on the [Amicitia wiki](https://amicitia.miraheze.org/wiki/Persona_4_Golden/Events). For those that aren't, as well as Persona 3 FES's events, there are [text script dumps](https://drive.google.com/file/d/113DuAlmIqb8AU4xBYNuU5FDxPP3mVX67/view) with the text from all events so you can find the ID of a specific event.

Events can be edited using the `event(majorID, minorID)` call. `frame_#` (where `#` represents a frame ID) can be used to call a frame number can be used to set music. For example:

```
const introLimoEvent = event(101, 1)
event[introLimoEvent]:
  frame_100 = 42
end
```

This calls BGM ID 42 at frame 100 for event E101_001, the introduction limo event where you first meet Igor.

## Frame BGM

The `frame_bgm(EFFECT, songID)` command can be used for various BGM effects.

```
const introLimoEvent = event(101, 1)
event[introLimoEvent]:
  // Options:
  // BGM_FADE_IN
  // BGM_FADE_OUT
  // BGM_PLAY
  // BGM_VOLUME_DOWN
  // BGM_VOLUME_UP
  // BGM_ALL_STOP
  frame_100 = frame_bgm(BGM_PLAY, 42)
end
```

## Additional Information

Additional information on editing events can be found [here](event-audio-editing-pmx). It is also necessary to directly edit the .PM2 and .PM3 files as described there for advanced cases, such as but not limited to:
- Differing BGM for a given dialogue choice
- Removing ambient noise