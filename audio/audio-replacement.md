---
title: Replacing Existing Audio
layout: page
parent: Audio
nav_order: 2
games: ['P3P', 'P4G', 'P5R']
---

## Replacing Audio Normally

If modding P3P on PC, you can simply drag and drop the files in your mod folder. For P4G or P5R on PC, AWB Emulator is the recommended method to replace audio as it allows audio replacement without repacking and distributing the entire sound archive. Documentation on AWB Emulator can be found [here](https://sewer56.dev/FileEmulationFramework/emulators/awb.html).

{% tabs awbemulator %}
{% tab awbemulator P3P %}
Place your audio files in `(mod folder)/P5REssentials/(name this whatever)/data/sound`, following the file structure for the original audio file(s). P3P uses ADX files for its audio.
{% endtab %}

{% tab awbemulator P4G %}
Place your audio files in `(mod folder)/FEmulator/AWB/(archive name)`, where `(archive name)` is a folder named after the archive you want to edit. P4G uses HCA files for its audio.

For example, if editing music, the corresponding audio would be placed in `(mod folder)/FEmulator/AWB/snd00_bgm.awb`, where `snd00_bgm.awb` is a folder.

{% endtab %}

{% tab awbemulator P5R %}
Place your audio files in `(mod folder)/FEmulator/AWB/(archive name)`, where `(archive name)` is a folder named after the archive you want to edit. P5R uses encrypted ADX files for its audio.

For example, if editing music, the corresponding audio would be placed in `(mod folder)/FEmulator/AWB/BGM.awb`, where `BGM.awb` is a folder.
{% endtab %}
{% endtabs %}



{: .todo }
Make this more specific including file names

## Repacking an AWB file

This method of replacing audio was used for P4G and P5R before the release of AWB Emulator, but nowadays the AWB Emulator method is preferred in the interest of saving space. Still, there are niche cases where one may want to repack an AWB instead.

For this, open your [Sonic Audio Tools](https://github.com/blueskythlikesclouds/SonicAudioTools) folder and drag the ACB file onto AcbEditor.exe. This should give you a dump of the **entire** contents of the ACB/AWB in a folder. Create your ADX/HCA as normal, but then place it in the folder created by the dump. Then, repack the ACB and AWB by dragging the folder onto ACBEditor. In your mod, create the path `(mod folder)/P5REssentials/CPK/(name this whatever)/(path to the AWB)` and place your repacked ACB and AWB inside.
