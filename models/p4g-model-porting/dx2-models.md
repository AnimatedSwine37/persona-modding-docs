---
title: DX2 Models
layout: page
nav_order: 1
grand_parent: Models
parent: P4G Model Porting
---

# 📱 DX2 Models

This guide was written by [Dexxtrip](https://gamebanana.com/members/2225195) on Gamebanana / @bonq.com on Discord.

This guide covers the process of porting Demon designs from Shin Megami Tensei DX2 to Persona 4 Golden. These instructions apply to both the PC and Vita versions unless specified otherwise.

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Required Tools

These are the tools needed for porting DX2 models.

| Tool      | Usage |
| ----------- | ----------- |
| [Noesis](https://richwhitehouse.com/index.php?content=inc_projects.php&showproject=91)      | Needed for properly exporting FBX models in GMO specific formatting.      |
| [GMOConv & GIMConv](https://cdn.discordapp.com/attachments/925531160392658944/1038502426686259240/PSP_Tools.7z)  | Needed for converting exported FBX into usable GMO and converting textures. |
| [Sadoaiya](https://pioziomgames.github.io/programs/sadoaiya) | Needed for optimizing models.|
| [Notepad++](https://notepad-plus-plus.org)   | Recommended for fixing materials and changing texture file extensions.    |
| [GMOView](	https://cdn.discordapp.com/attachments/925531160392658944/1038502426686259240/PSP_Tools.7z)   | Checking your model visually.|
| [GMO2AMD Python Script](https://github.com/Timo654/gmo2amd) | Adding the AMD header to GMO files. |
| A complete dump of the game with models in FBX format.   | For working with any and all files.     |

## Model Porting with Noesis

First, let's open up our model in Noesis to check if we have the right one. For the rest of this tutorial, I'll be working with the Sonic model, but this information will apply to every single other design.

![Alt text](image.png)

Once opened, right click the model in the center and click Export.

In this window we'll need to set a few options. First, set the Additional Animation Output value to "Multi-FBX Anim Sequence" then set these options in the export settings.

```
-fbxoldexport -rotate 0 0 180 --bakeanimscale -bmoda -scale 140
```

![Alt text](image-5.png)

This does several things, so let's break it down.

First, it exports the model in an older format so that it can be converted by GMOConv later.

Second, it scales the models up to a more reasonable size.

Next, it exports all animations as their own individual FBX files.

After that, it rotates the model 180 degrees on the Z axis so the model faces the correct direction in P4G.

Finally, it adjusts the bones to match the model.

Once exported, you should see a list of models like this:

![Alt text](image-6.png)

Now that we have our animations exported as FBX, let's check them before we get started on making the model itself.

Open up each animation one by one in Noesis and confirm that it's working as intended. You mainly want to check Idle, Attack, and Skill, as well as any other versions of those including numbers.

The model will not contain any mesh data, just the animation of the bones. The model will also not be facing the screen, this is intentional as it will be facing the correct direction as a GMO.

If you encounter an animation that isn't animated and stays in an A pose, then you can disregard it and continue with the other version.

Now, let's move onto importing animations.

## Importing Animations

Importing Animations is relatively simple. Open up a command prompt next to GMOConv and pass an argument like this, replacing the fbx files with the path to yours:
```
gmoconv scaleout.fbx -S -motions scaleout-skill.fbx scaleout-attack.fbx scaleout-skill.fbx scaleout-attack.fbx scaleout-idle.fbx
```

![Alt text](image-7.png)

This command does a lot of things, so let's break it down.

First, it converts all models to GMO.

Next, it merges all of the motion data into the first model.

Finally, it extracts the model as a GMS.

This process can take between a few minutes and a few seconds depending on the speed of your computer.

Once finished, open up GMOView and check your model.

![Alt text](image-8.png)

Your model won't have textures, this is normal and we'll fix it in a second. Press 2 on your keyboard and flip through the animations to check that the process went over smoothly.

Before closing, let's check one more thing. Press 4 on your keyboard and scroll down to BONE, turn it on.

![Alt text](image-9.png)

Your model will have it's bones highlighted in red, as shown here:

![Alt text](image-10.png)

If you don't see bones around your character, press the middle mouse button and drag your mouse upwards. 

Check if you see a mass of red lines surrounding your model. This is typical of models with broken bone placement. Jump back to the section where we went over exporting the model in Noesis, and double check that -bakeanim scale and -bmoda are inserted in export options.

Once you've confirmed that the model is working as intended, let's jump to importing textures.

## Texture Importing

In this section, we'll go over texture importing. 

First, we need to check how many of the textures are actually necessary. Open up your extracted .GMS file in a text editor of choice and look for this string:

```
Texture "
```

You should find your texture mentions like this:

![Alt text](image-11.png)

Change the extensions to .TM2 like this:

![Alt text](image-12.png)

Now, you'll need to convert those PNG files to TM2.

{: .warning }
> For Playstation Vita users, you’ll most likely need to reduce the textures to 512x512 at the maximum to prevent GPU crashes.&#x20;

Open up a command prompt window and pass an argument like this:
```
gimconv (path to png) -o (path to tm2)
```

You should end up with two .TM2 textures next to our original PNGs.

Next, we need to reconvert our GMS back into a GMO to apply the inserted textures. Open up a command prompt and pass either one of these commands:
{% tabs smt-v %}
{% tab smt-v gmoconv %}
```
gmoconv (path to gms)
```
{% endtab %}

{% tab smt-v sadoaiya %}
```
sadoaiya (path to gms)
```
{% endtab %}
{% endtabs %}

Once you're done, let's reopen our freshly made 
