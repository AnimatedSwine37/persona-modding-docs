---
title: Extracting The Game's Files
layout: page
parent: Getting Started
nav_order: 1
---

# Extracting The Game's Files
{: .d-inline-block }

Universal
{: .label .label-green } 

Before you start making your mod you'll need to extract the game's base files so you can find what you actually want to edit. 

## Extracting CPKs
All of the game's files are stored in a number of CriWare CPK files such as `EN.CPK` and `data_e.cpk`. 

To unpack these you'll need to download [CriFsV2Lib.GUI](https://github.com/Sewer56/CriFsV2Lib/releases/latest), on the page download the file called `CriFsLib.GUI.zip` and extract it somewhere.

Now run `CriFsLib.GUI.exe` and you'll be greeted with a window asking you to select a CPK file. The CPKs you want to extract will depend on the game, below is a summary:

{% tabs cpk %}
{% tab cpk P3P %}
- `data\umd0.cpk` - Main and Japanese Files
- `data_EN\umd0.cpk` - English Files
- `data\umd1.cpk` - Audio and Video Files
{% endtab %}

{% tab cpk P4G %}
- `data.cpk` - Main and Japanese Files
- `data_e.cpk` - English Files
- `data_movie.cpk` - Video Files
{% endtab %}

{% tab cpk P5R %}
- `CPK\BASE.CPK` - Main and Japanese Files
- `CPK\EN.CPK` - English Files
- `CPK\MOVIE_JE.CPK` - Video Files
- `SOUND_E.CPK` - English Audio Files
{% endtab %}
{% endtabs %}

It's recommended to dump both the main files and the English files at least to start with. 

{: .info }
> The main files will contain anything that doesn't change with the language (like models) plus the Japanese files. 
> 
> The English (or other languages) files will **only** contain the files that are specific to that language (mostly text). 

After you've dragged your desired CPK into CriFsLib Extractor you'll be able to see the names of all files inside and either extract selected or all files. Right click any file, click **Extract All** and select an appropriate folder; after a little bit all of the files will be extracted into it.

![]({%link assets/images/getting-started/crifs-extract-all.png %})

## Extracting Archives

When you look through your extracted files you'll find there are many large `bin`, `arc`, `pac`, and `pak` files (which will depend on the game). These are archives, containing files inside of them.

### Amicitia GUI

The easiest way to extract files from these archives is [Amicitia](https://github.com/tge-was-taken/Amicitia/releases/latest). Download the `Release.7z` and extract it somewhere appropriate. When you open a file in Amicitia, if it is a valid archive you'll see a tree of files that you can export or replace by right-clicking on them.

![]({%link assets/images/getting-started/amicitia.png %})

### Command Line
Although Amicitia is the most user friendly, it's not good for batch extracting files as you can only select one at a time. If you need to perfom batch operations you can download [PackTools](https://github.com/tge-was-taken/AtlusFileSystemLibrary/releases/latest).

Running it without any arguments will give you some help information. The command you'll likely want to use is `unpack` to extract files from an archive. For example, a simple command to extract all .bin files in a folder (and subfolders) is:

{% tabs unpack %}
{% tab unpack Command Prompt %}
``` bat
for /R "Path\To\Folder" %i in (*.bin) do "Path\To\PAKPack.exe" unpack %i
```
{% endtab %}
{% tab unpack Powershell %}
``` powershell
Get-ChildItem "Path\To\Folder" -Recurse -Filter *.bin | Foreach {&"Path\To\PAKPack.exe" unpack $_.fullname}
```
{% endtab %}
{% endtabs %}

### Context Menu
The final way to extract files is using [PAKPack-Registry](https://github.com/LTSophia/PAKPack-Registry/releases/latest) which adds a context menu option to unpack and pack PAK archives. After downloading and extracting it just run `PAKPack Registry.exe` and you're good to go.

Now whenever you right-click a file you'll have a **PAKPack** option at the top of the menu which can be used to extract the PAK.

![]({%link assets/images/getting-started/pak-context.png %})
