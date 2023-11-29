---
title: Event Audio Editing (P3F, P4G)
layout: page
parent: Events
nav_order: 1
games: ['P3F', 'P4G', 'P4G Vita']
---

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

{: .todo }
> Add information on editing sound effects and voice lines; this is only written for music so far

## Tools You'll Need
- [Libellus Event Editing Tools](https://cdn.discordapp.com/attachments/1160803654840881162/1161102130036351036/LEET.zip)
- A text editor like Notepad++ or similar
- [010 Editor](https://www.sweetscape.com/010editor/)
	- [010 Editor templates](https://github.com/tge-was-taken/010-Editor-Templates)

## Event File Locations

- Persona 3 FES and Persona 4 store their .PM1/.PM2/.PM3 files in `DATA.CVM/event`.
- Persona 4 Golden stores its .PM1/.PM2/.PM3 files in `data.cpk/event`.
	- Music calls for many social link and miscellaneous events can also be found in `init.bin/event/cmm.bin/cmmEventBGM.dat`.

## BGME Functionality

The [BGME Framework](https://gamebanana.com/mods/477399) includes some functionality that can assist in event editing for Persona 4 Golden (PC). More information can be found [here](BGME-events), or in the [BGME documentation](https://t-poseratkechi.github.io/PersonaMusicScript/docs).

## Extracting and opening PM2 and PM3 files

Find the event that you want to edit. For Persona 4 Golden, many of the events are documented on the [Amicitia wiki](https://amicitia.miraheze.org/wiki/Persona_4_Golden/Events). For those that aren't, as well as Persona 3 FES's events, there are [text script dumps](https://drive.google.com/file/d/113DuAlmIqb8AU4xBYNuU5FDxPP3mVX67/view) with the text from all events so you can find the ID of a specific event. For example, `E104_001` in P4G is the scene where Yu first arrives in Inaba.

Open the corresponding folder and find the associated PM2 and PM3 files. Drag these files onto `Libellus Event Editing Tool.exe`. This will convert the files into a JSON file and place it into a new folder.

![]({%link assets/images/events/leet.png %})

When extracted, the PM2 will look something like this:

![]({%link assets/images/events/pm2.png %})

and the PM3 will look something like this:

![]({%link assets/images/events/pm3.png %})

{: .info }
> Not all events have BGM calls within their PM2 or PM3 files! For P4G, if your PM3 file does not have a BGM section, the music may either be called as ambience in the PM2 (ex: Junes theme) or stored in `init.bin/event/cmm.bin/cmmEventBGM.dat`. See [Editing cmmEventBGM.dat (P4G PC only)](editing-cmmeventbgmdat-p4g-pc-only).

Looking at the format of the BGM call in the .PM3 shows the most important parameters worth noting:

- `"TargetType": "BGM"`: indicates that the section has to do with BGM.
- `"StartFrame"`: what frame the music will start playing on. 30 frames corresponds to 1 second, as P3F and P4G (prior to its remaster) both run at 30 FPS.
- `"Id"`: stores the information on what song to play.
- `"Fade"`: if music fade out is called, this specifies which fade out to use - a fast one or a short one.

## Editing BGM calls

In the BGM call, `"Id"` is the song ID called. For example, in this event, at frame 769, song ID 50 (Girl of the Hollow Forest) is called.

![]({%link assets/images/events/E104_001.png %})

This is compatible with BGME; new songs are simply called using their corresponding ID. For example, in this event, at frame 285, song ID 775 is called.

![]({%link assets/images/events/E104_001_AME.png %})

## Editing BGM timings

`StartFrame` denotes the frame in which the music or audio will start (or end). A frame in P3F and P4G is 1/30 of a second (or 30 frames = 1 second), as the games originally ran at 30 FPS; this is still true for the P4G remaster despite their higher maximum framerate.

The PM2 file contains data on when different messages will play. It typically looks like this:

![]({%link assets/images/events/pm2_msg.png %})

`StartFrame` here similarly indicates when the message is shown. `MessageId` indicates which message is to be shown. By using the [text script dumps](https://drive.google.com/file/d/113DuAlmIqb8AU4xBYNuU5FDxPP3mVX67/view) or extracting the corresponding PM1 event file, you can find which message corresponds to that ID. For example, for `E104_001` in P4G (the scene where Yu first arrives in Inaba), `MSG_000` is called at frame 241, and `MSG_001` is called at frame 392.

![]({%link assets/images/events/p4g_msg.png %})

{: .info }
> For messages, the start frame is also typically the end frame to account for message auto advance and voiced dialogue! With the above example, if you set a `StartFrame` of 242, your music will only start after you advance past Dojima's dialogue.

## Additional music options (I left off here)

{% tabs fadeout %}

{% tab fadeout P4G %}
To have BGM and other sound effects like ambience fade out gradually, use

```
          "Fade": 2
```

To have BGM and other sound effects like ambience fade out suddenly, use

```
          "Fade": 3
```

The Junes theme is treated as ambience, and is called in the .PM2 using

```
        {
          "TargetType": "ENV",
          "StartFrame": _,
          "Length": 0,
          "NameIndex": -1,
          "Data": "00 00 00 00 00 00 00 00 00 00 00 00 3F 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00"
        },
```

muscle blues is treated as ambience, and is called in the .PM2 using

```
        {
          "TargetType": "ENV",
          "StartFrame": _,
          "Length": 0,
          "NameIndex": 65535,
          "Data": "00 00 00 00 00 00 00 00 00 00 00 00 1B 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00"
        },
```

It's SHOW TIME! is treated as ambience, and is called in the .PM2 using

```
        {
          "TargetType": "ENV",
          "StartFrame": _,
          "Length": 0,
          "NameIndex": 65535,
          "Data": "00 00 00 00 00 00 00 00 00 00 00 00 20 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00"
        },
```

Ambience can be stopped using

```
        {
          "TargetType": "ENV",
          "StartFrame": _,
          "Length": 0,
          "NameIndex": 65535,
          "Data": "00 00 00 00 00 00 00 00 00 00 00 00 0A 00 02 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00"
        },
```

{% endtab %}

{% tab fadeout P3F %}
To have BGM and other sound effects like ambience fade out, use

```
          "Fade": 6
```
{% endtab %}

{% endtabs %}

If switching from playing one song to another, P3F and P4G default to using a sudden fade out of the previous track.


## Editing cmmEventBGM.dat (P4G PC only)

{: .info }
> It is possible to edit event music fully without editing this file by forcing specific music to play in the PM3 file for the event with a new BGM call.

{: .warning }
> cmmEventBGM.dat is **not** compatible with BGME!

Many of P4G's social link events call music at the beginning in `init.bin/event/cmm.bin/cmmEventBGM.dat`. Editing this file requires the use of [010 Editor](https://www.sweetscape.com/010editor/) and [several templates](https://github.com/tge-was-taken/010-Editor-Templates) designed for file types supported by the Persona games. Extract these templates to a separate folder.

Extract `cmmEventBGM.dat` using Amicitia or Persona Editor, then open it in 010 Editor. By running a template on it, we can use a more readable format. Open a template by clicking the Run Template button, then the Open Template button, or press `Ctrl + F5`.

![]({%link assets/images/events/010_template.png %})

Open your 010 templates folder and select `/templates/p4g_eventBGM.bt`. This will run the template on the file you have open and present it in a more readable format as shown below.

![]({%link assets/images/events/010_bgm.png %})

Expanding the drop downs shows the following data:
- MajorID and MinorID: the event ID. For example, in the image above, the event shown is E830_012.
- BGMIndex: the index for the desired song.

You can change BGMIndex for a given event here to change the music that plays at the beginning. Note that not all events are listed here.