---
title: Extracting The Game's Files
layout: page
parent: Getting Started
nav_order: 1
games:
  - P3P
  - P4G
  - P5R
  - P3R
---

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

### PersonaEditor GUI

[PersonaEditor](https://github.com/Meloman19/PersonaEditor/releases/tag/1.6) is an alternative program. While Amicitia is preferred in most cases, PersonaEditor is more useful for some file types, and features limited built-in text editing support. It has a similar UI to Amicitia.

![]({%link assets/images/getting-started/personaeditor.png %})

### Command Line
Although Amicitia is the most user friendly, it's not good for batch extracting files as you can only select one at a time. If you need to perform batch operations you can download [PackTools](https://github.com/tge-was-taken/AtlusFileSystemLibrary/releases/latest).

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




# Persona 3 Reload


P3R is different than all the other Persona games on pc so far, since it uses the Unreal Engine, and uses IO Store
That means all the data assets are stored in .pak file.
That means you need the program [Fmodel](https://fmodel.app/) to extract the data


### Setting up Fmodel


Once you have downloaded Fmodel, extract the exe and run it,
Now you need to add the P3R game files to the program.
Go to Directory -> Selector. A pop up window will appear where you can add undetected game.
Name it P3R and browse to where your .pak files are located.
This will differ depending on if you have the game on Steam or Gamepass/ where you have installed the game
The default steam path would be: `C:\Program Files (x86)\Steam\steamapps\common\P3R\P3R\Content\Paks`
Then you click the blue "+" to add the game to the list


![]({%link assets/images/getting-started/fmodel_ebd9hxtt5s.png %})


Now P3R should be on your Detected game list. Make sure the engine version is "GAME_UE4_27"
Click Ok and now Fmodel should load all the files
Next you need to enter the AES key, since the .pak files are encrypted.
Go to Directory -> AES
Then for the Main Static Key you input: `0x92BADFE2921B376069D3DE8541696D230BA06B5E4320084DD34A26D117D2FFEE`
Click Ok and all the archives on the left should now be green
Select the loading mode to All
And click the load button
Now you got a tree view of all the asset files you can extract and preview


![]({%link assets/images/getting-started/fmodel_985mxhyhpn.png %})


Now simply browse to an asset you want to extract
If we browse to `P3R/Content/Xrd777/Characters/Player/PC0001/Models/T_PC0001_C001_00_Col.uasset` and double click it. 
We can see it is the texture for the MC's outfit. If you right click the asset you get some options how to extract it.
Since this example is a texture, we'd select Save Texture (.png)


These different options is useful depending on what assets you are extracting
If you want to extract the MC's model then you'd select `SK_PC0001_C001` and then Save Model (.psk)

