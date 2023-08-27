---
title: Event Audio Editing
layout: page
parent: Audio
nav_order: 3
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

{: .todo }
> Add information for P3P and P5R

{: .todo }
> Add information on editing sound effects and voice lines; this is only written for music so far

## Tools You'll Need
- [Libellus Event Editing Tools](https://github.com/Tupelov/Libellus-Event-Tools)
- A text editor like Notepad++ or similar
- [010 Editor](https://www.sweetscape.com/010editor/)
	- [010 Editor templates](https://github.com/tge-was-taken/010-Editor-Templates)

Persona 4 Golden stores much of its event data in PM1, PM2, and PM3 files in `data.cpk/event`. Notably, music tends to be stored either in the PM3 files or in `init.bin/event/cmm.bin/cmmEventBGM.dat`. Sound effects tend to be stored either in the PM2 or PM3 files.

# Editing BGM And Sound Effect Calls In Events

## Extracting and opening PM2 and PM3 files

Find the event that you want to edit. Many of the events are documented on the [Amicitia wiki](https://amicitia.miraheze.org/wiki/Persona_4_Golden/Events), but for those that aren't, there are [text script dumps](https://drive.google.com/file/d/113DuAlmIqb8AU4xBYNuU5FDxPP3mVX67/view) with the text from all events so you can find the ID of a specific event. For example, `E136_001` is the scene in Yasogami High School where Yosuke decides to enter the TV for the second time.

Open the corresponding folder and find the associated PM2 and PM3 files. Drag these files onto `Libellus Event Editing Tool.exe`. This will convert the files into a JSON file and place it into a new folder.

![]({%link assets/images/audio/leet.png %})

When extracted, the PM2 will look something like this:

![]({%link assets/images/audio/pm2.png %})

and the PM3 will look something like this:

![]({%link assets/images/audio/pm3_1.png %})

{: .info }
> Not all events have BGM calls within their PM2 or PM3 files! If your PM3 file does not have a BGM section, the music may either be called as ambience in the PM2 (ex: Junes theme) or stored in `init.bin/event/cmm.bin/cmmEventBGM.dat`. See the next section if you wish to edit `cmmEventBGM.dat`.

This looks complicated, but there really are only a few things that actually need to be edited to change music or sound effects. Let's break down the format of this file:

- `"TargetType": "BGM"`: indicates that the section has to do with BGM.
- `"StartFrame"`: what frame the music will start playing on. It is unclear how frames translate to time, but it is likely that 30 frames corresponds to 1 second.
- `"Data"`: stores the information on what to play.

After editing the file(s), place them in `(mod folder)/P5REssentials/(name this whatever)/event/(path to the event files)`.

## Editing BGM calls

Data for BGM is stored as

```"Data": "00 00 00 00 00 00 00 00 00 00 00 00 00 00 XX XX 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00"```

where the `XX XX` denotes the BGM ID in hexadecimal. For example, BGM ID 012 (SMILE) would be entered as `0C 00`. For BGM ID 700 (only applicable if using BGME to add new music), that would be entered as `BC 02`.

## Additional music options

To have BGM and other sound effects like ambience fade out gradually, use

```"Data": "00 00 00 00 00 00 00 00 00 00 00 00 02 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00"```

To have BGM and other sound effects like ambience fade out suddenly, use

```"Data": "00 00 00 00 00 00 00 00 00 00 00 00 03 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00"```

If switching from playing one song to another, P4G defaults to using a sudden fade out of the previous track.


# Editing BGM At Event Start

{: .info }
> It is possible to edit event music fully without editing this file by forcing specific music to play in the PM3 file for the event! However, many events have their music calls stored here, so editing this file can reduce redundancy.

Many of P4G's events call music at the beginning; this data is stored in `init.bin/event/cmm.bin/cmmEventBGM.dat`. Editing this file requires the use of [010 Editor](https://www.sweetscape.com/010editor/) and [several templates](https://github.com/tge-was-taken/010-Editor-Templates) designed for file types supported by the Persona games. Extract these templates to a separate folder.

Extract `cmmEventBGM.dat` using Amicitia or Persona Editor, then open it in 010 Editor. By running a template on it, we can use a more readable format. Open a template by clicking the Run Template button, then the Open Template button, or press `Ctrl + F5`.

![]({%link assets/images/audio/010_template.png %})

Open your 010 templates folder and select `/templates/p4g_eventBGM.bt`. This will run the template on the file you have open and present it in a more readable format as shown below.

![]({%link assets/images/audio/010_bgm.png %})

Expanding the drop downs shows the following data:
- MajorID and MinorID: the event ID. For example, in the image above, the event shown is E830_012.
- BGMIndex: the index for the desired song.

You can change BGMIndex for a given event here to change the music that plays at the beginning. Note that not all events are listed here.

After editing the file, place it in `(mod folder)/FEmulator/PAK/init.bin/event/cmm.bin`, where `init.bin` and `cmm.bin` are folders.

{: .todo }
> Figure out whether this is BGME compatible

{: .todo }
> Figure out if it is possible to add more entries for different events that aren't already present