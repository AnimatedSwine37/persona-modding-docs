---
title: Battle Music Editing
layout: page
parent: Audio
nav_order: 4
games: ['P4G']
---

{: .todo }
> Add information for P3P and P5R

{: .todo }
> Update as BGME continues to be developed

{: .warning }
> This requires [BGME](https://discord.com/channels/746211612981198989/1089998902616395776/1089998902616395776), which is currently in development and only intended for personal use at this time. This guide will be updated when BGME is released.

## Tools You'll Need
- [010 Editor](https://www.sweetscape.com/010editor/)
	- [010 Editor templates](https://github.com/tge-was-taken/010-Editor-Templates)

Battle music for Persona 4 Golden is stored in `init_free.bin/battle/ENCOUNT.TBL`. Editing this file requires the use of [010 Editor](https://www.sweetscape.com/010editor/) and [several templates](https://github.com/tge-was-taken/010-Editor-Templates) designed for file types supported by the Persona games. Extract these templates to a separate folder.

Extract `ENCOUNT.TBL` using Amicitia or Persona Editor, then open it in 010 Editor. By running a template on it, we can use a more readable format. Open a template by clicking the Run Template button, then the Open Template button, or press `Ctrl + F5`.

![]({%link assets/images/music/010_template.png %})

Open your 010 templates folder and select `/templates/p4g_tbl.bt`. This will run the template on the file you have open and present it in a more readable format as shown below.

![]({%link assets/images/music/010_encount.png %})

Expanding the drop downs shows the following data:
- Enemy Encounters\[x\]: x represents the encounter ID. A list of encounter IDs can be found on [Amicitia wiki](https://amicitia.miraheze.org/wiki/Persona_4_Golden/Encounters).
- Music: the selected battle music.
- u16 Field04: Set to 1 to enable BGME, so that different music plays in a given encounter.

The default selection of battle BGM is shown below.

![]({%link assets/images/music/010_default_battle_bgm.png %})

[BGME](https://discord.com/channels/746211612981198989/1089998902616395776/1089998902616395776) can also be used to add and call custom battle music. Instead of selecting from the default selection of battle BGMs, enter the ID of the new song added. For example, to change a battle BGM to `00679_streaming`, `00680_streaming`, ..., change the music ID to `679`, `680`, ...