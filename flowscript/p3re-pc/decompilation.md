---
title: Decompiling Flowscripts
layout: page
parent: P3RE Flowscript Editing
grand_parent: Flowscript
nav_order: 1
games: ['P3RE']
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

Flowscripts are responsible for handling logic during gameplay in almost all Persona games and several other Atlus entries. For example, enemy AI, setting and checking flags for displaying dialog, starting scripted battles etc. They are stored in BF_*.uasset files.

## Pre-requisites

There are a couple of options you can go with to decompile flowscripts but generally you should install FModel so you can find flowscripts in your game files if needed:
1. [**FModel**](https://github.com/4sval/FModel/releases/latest) is the go-to tool for viewing and extracting files from Persona 3 Reload. Select Unreal Engine 4.27 and make sure to enter the AES key / decryption key in Directory > AES: 0x92BADFE2921B376069D3DE8541696D230BA06B5E4320084DD34A26D117D2FFEE

2. [**Unreal Atlus Script**](https://gamebanana.com/mods/501844) is a mod you can install for the game which can dump all BMDs and BFs which are currently loaded ingame. It's a great tool to use if you know how to trigger the flowscripts. It is also the best way to add modified flowscripts to the game but that will be covered in the Compilation section.

3. [**Atlus Script GUI**](https://github.com/ShrineFox/AtlusScriptGUI) is an alternative to Atlus Script Tools. Although it uses atlus script tools to decompile the scripts it has a user friendly GUI which you can use to decompile the scripts you find via Fmodel. This is the easiest way to decompile flowscripts.

4. [**Atlus Script Tools Cli**](https://github.com/tge-was-taken/Atlus-Script-Tools) is the tool you should use if you have experience working in command prompt/powershell and need to decompile BF files that you find via Fmodel.

## Decompiling FlowScripts

### Using the Unreal Atlus Script Mod

1. After installing the mod, open Reloaded-II and navigate to your mods list for P3RE.

2. Now select the Unreal Atlus Script mod and click on configure mod

3. Then set Dump BFs to decompile, Decompile BF Endianess to Both and click on save.

4. Close the configuration window and launch the game. The mod will now dump any loaded BFs to the dump folder inside the Unreal Atlus Script mod folder. To navigate to it's mod folder select the mod and click on Open Folder.

![]({%link assets/images/flowscript/p3re-pc/UASSetting.png %})

### Using Atlus Script GUI

1. After installing Atlus Script GUI (Must be a newer version than v3.5). Launch the app and on the top right corner click on game and then select Persona 3 Reload from the list.

2. Now drag any BF_*.uasset file over the "Drag a .BF or .BMD to decompile" box.

![]({%link assets/images/flowscript/p3re-pc/AtlusScriptGuiGameSetting.png %})

### Using Atlus Script Tools Cli
After installing Atlus Script Tools (It is recommended that you add the program to your systems PATH so it can be accessed from any folder but not required.) use the following command to decompile a BF_*.uasset file.

{: .warning }
>Flowscripts can be decompiled using 2 different Outformats V4BE and V4. To figure out which one you need to try any one of them and if you get any errors during decompilation try the other outformat.

V4 Outformat Command:
```
AtlusScriptCompiler <Path to BF_*.uasset> -Decompile -Library P3RE -Encoding UTF-8 -OutFormat V4
```

V4BE Outformat Command:
```
AtlusScriptCompiler <Path to BF_*.uasset> -Decompile -Library P3RE -Encoding UTF-8 -OutFormat V4BE
```