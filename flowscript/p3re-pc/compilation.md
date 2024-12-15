---
title: Recompiling Flowscripts
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

This section covers recompiling previously decompiled flowscript files (BF_*.flow files) so you can actually test them ingame.

## Pre-requisites

The pre-requisites are the same as those in the [Decompiling Flowscripts Section]({%link flowscript/p3re-pc/decompilation.md %}).

## Recompiling FlowScripts

### Using the Unreal Atlus Script Mod

{: .warning }
>Atlus Script Library P3R support is still WIP. Compiled flowscripts might cause crashes; this might be from incorrect settings I set in compilation/transferring P3R support to BF Emu fork or the compiler itself.

This method does not compile the flowscripts but can be used to replace flowscripts ingame. This method is also superior to replacing compiled flowscript files directly via Unreal Essentials as you can use the UE Atlus Script API to add your assets via code. An example use case can be a config option where you can let users enable or disable what text changes/flowscript changes they want ingame. You also don't have to deal with any of the V4/V4BE Format related issues most of the time.

1. Create a mod with a Mod Dependency on Unreal Atlus Script.

2. In your mod's folder, create a folder named ue-atlus-script.

3. Place any replacement .flow files here. The file must have the same name as the asset it's replacing.

4. For example, BF_FldInitScript_102.uasset would be replaced by adding BF_FldInitScript_102.flow.

5. Files can be nested in folders for organization.

{: .info }
>EPISODE AIGIS: Many scripts were duplicated in the Astrea folder for the DLC. To replace Astrea scripts, place files in an astrea folder inside of ue-atlus-script.

### Using Atlus Script GUI

{: .warning }
>Flowscripts can be compiled using 2 different Outformats V4BE and V4. To figure out which one you need check what format you originally used to decompile the flowscript. You will get no errors during compilation if you use the wrong format but loading the flowscript ingame will not work.

1. Launch the app and on the top right corner click on game and then select Persona 3 Reload from the list.

2. If your Outformat is V4BE check if the Big Endian .FLOW (P3RE) option has a checkmark next to it. This option can be found under the Options tab. If your Outformat is V4 make sure it is disabled.

3. Now drag any BF_*.flow file over the "Drag a .Flow or .Msg to Compile" box.

### Using Atlus Script Tools Cli

{: .warning }
>Flowscripts can be compiled using 2 different Outformats V4BE and V4. To figure out which one you need check what format you originally used to decompile the flowscript. You will get no errors during compilation if you use the wrong format but loading the flowscript ingame will not work.

Use the following command in Command Prompt or Windows Powershell to recompile a BF_*.flow file.

V4 Outformat Command:
```
AtlusScriptCompiler -In <Path to BF_*.flow> -Compile -Library P3RE -Encoding UTF-8 -OutFormat V4
```

V4BE Outformat Command:
```
AtlusScriptCompiler -In <Path to BF_*.flow> -Compile -Library P3RE -Encoding UTF-8 -OutFormat V4BE
```