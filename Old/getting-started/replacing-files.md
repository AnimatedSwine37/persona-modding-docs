---
title: Replacing Files 
layout: page
parent: Getting Started
nav_order: 3
games: ['P3P', 'P4G', 'P5R']
---

Now that you have [made a mod](making-a-mod) you can start replacing the game's files. There are two broad types of files which you will replace in different ways: **loose** files and **packed** files.

## Replacing Loose Files
Loose files are the simplest, they are *loose* in some folder in the game's files. 

To replace these, right click your mod in Reloaded-II and click Open Folder.

![]({{ site.baseurl }}/assets/images/getting-started/replacing-files/open-mod-folder.png)

Right-click and make a folder called P5REssentials. In that folder, make another folder called CPK. Then create *another* folder in that folder (you can name it whatever you want, so long as there are no spaces). 

Now, take a look at the file path of the original file. Recreate this path in your custom-named folder, then rename your modded file to the name of the original file and place it inside. For example, if I'm replacing Yusuke's P5D outfit (BASE.CPK/MODEL/CHARACTER/0005/C0005_170_00.GMD), the path should look something like this:

![]({{ site.baseurl }}/assets/images/getting-started/replacing-files/directory.png)

## Replacing Packed Files
Packed files are a bit more complicated, they are inside of an archive file (think like a zip) which we call a PAK.

{: .info }
PAK archives can have many different file extensions like `PAK`, `ARC`, and `BIN` although they are all actually the same format.

To replace these, open your mod folder as before, but then create a folder named FEmulator. Inside this new folder, make another folder called PAK. Then, in the PAK folder, create a folder with the name of the PAK.

If you noticed while viewing the PAK in Amicitia that your file was named something like battle/effect/z0.tmx, treat everything before z0.tmx like a path, and create folders accordingly. PAKs can also be nested within PAKs; if this happens, just create a folder for the nested PAK and repeat until you get to the file you're actually replacing.

## Other Files
Certain files in certain games are handled differently (for example, P4G music replacement). These are covered in their own sections.