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
-fbxoldexport -rotate 0 0 180 -bakeanimscale -bmoda -scale 140
```

![Alt text](image-5.png)

This does several things, so let's break it down.

* **First**, it exports the model in an older format so that it can be converted by GMOConv later.
* **Second**, Second, it scales the models up to a more reasonable size.
* **Next**, Next, it exports all animations as their own individual FBX files.
* **After that**, After that, it rotates the model 180 degrees on the Z axis so the model faces the correct direction in P4G.
* **Finally**, Finally, it adjusts the bones to match the model.

Once exported, you should see a list of models like this:

![Alt text](image-6.png)

Now that we have our animations exported as FBX, let's check them before we get started on making the model itself.

Open up each animation one by one in Noesis and confirm that it's working as intended. You mainly want to check Idle, Attack, and Skill, as well as any other versions of those including numbers.

Insert image here.

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

* **First**, it converts all models to GMO.
* **Next**, it merges all of the motion data into the first model.
* **Finally**, it extracts the model as a GMS. 

This process can take between a few minutes and a few seconds depending on the speed of your computer.

Once finished, open up GMOView and check your model.

![Alt text](image-8.png)

Your model won't have textures, this is normal and we'll fix it in a second. Press 2 on your keyboard and flip through the animations to check that the process went over smoothly.

Before closing, let's check one more thing. Press 4 on your keyboard and scroll down to BONE, turn it on.

![Alt text](image-9.png)

Your model will have it's bones highlighted in red, as shown here:

![Alt text](image-10.png)

If you don't see bones around your character, press the middle mouse button and drag your mouse upwards. 

Check if you see a mass of red lines surrounding your model. This is typical of models with broken bone placement. Jump back to the section where we went over exporting the model in Noesis, and double check that `-bakeanimscale` and `-bmoda` are inserted in export options.

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

You should end up with TM2 textures for all textures mentioned in the GMS.

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

Once you're done, let's reopen our freshly made GMO in GMOView and check our textures. 

Your model should be fully textured now.

You may notice a brightness issue with your model, let's address that.

## Material Fixing

Go back to your opened GMS file again amd move to the materials section, you want to fix the materials by copying the material data from another Persona in P4G. 

You can do this by extracting a model from the base game using GMOConv, like this:
```
GMOConv -S (path to gms)
```
Open up the new GMS file and move to the material section like this:

Copy it and paste it onto your GMS file like this:

Old file here

New file here

Once your model is adjusted, reconvert the model back to a GMO like before. 

Here's a before and after showing the adjusted materials.

Now, let's convert our model to AMD so we can test in game. Pass either command like this:
{% tabs smt-v-2 %}
{% tab smt-v-2 python %}
```
python amd.py (path to gmo)
```
{% endtab %}

{% tab smt-v-2 sadoaiya %}
```
sadoaiya (path to gmo) -A
```
{% endtab %}
{% endtabs %}

Once you've confirmed that absolutely everything is in working order, let's move onto testing in game.

## Testing in game

The easiest way to test your model in-game is to replace an existing model and check that instead, here's a[ list of what models go with which Persona](https://amicitia.miraheze.org/wiki/Persona\_4\_Golden/data.cpk/model/persona).

Testing in game is the final part of getting models to work properly. You're going to need to check for a lot of things while in the game, so here's a list:

* Model visibility (Does the model actually render?)
* Positioning and scale in the compendium (Is the model centered in the compendium screen?)
* Positioning and scale in the fusion screen (Is the model centered in the fusion screen?)
* Positioning and scale in battles (Is the model positioned correctly in battles? Is it clipping into the floor or too high up?)
* Flashing & Clipping bits (Are any parts of the models acting irregularly?)
* Model Size (Is the model correctly sized in game?)

Here are a few visual examples of what I mean:

![]({{ site.baseurl }}/assets/images/models/smt-v-models/scaling comp example.png)*Example of good and bad compendium scaling and positioning. You want to aim for the image on the right where the Persona takes up as much of the empty space.*

![]({{ site.baseurl }}/assets/images/models/smt-v-models/pos battle example.jpg)
*Example of bad battle positioning, take note of the model clipping into the floor, you don't want that.*

![]({{ site.baseurl }}/assets/images/models/smt-v-models/model errors example.gif)                                                                       
*Example of irregular model performance. This is typically caused by missing blend subsets.*

Before we wrap up, you may have noticed that the model size isn't the best. You have two methods of fixing this, one easy and one long.

The easy method involves adjusting ps\_model.bin using (this tool)[https://github.com/ShrineFox/P4GPS\_ModelEditor] and (this guide)[https://www.youtube.com/watch?v=H\_YEB8efylQ]. This method is the fastest and easiest. If you're unable to use this method, we can try this next method.

The long method involves going back to the very first step of the guide, and changing the scale value to a larger or smaller number. 140 is the sweet spot for most models, but you may need to scale up and down this number. Continue with the rest of the guide and repeat if necessary until you reach a desired size.

Once you've checked all of these, verified that the size is adequte, and can verify that they are working perfectly, **congrats!** You've successfully ported a model from DX2!

In the next section, we'll go through other potential problems you may have faced and how to fix them.

## Troubleshooting

Here are some possible solutions to problems you may be having.

* The model is invisible / not rendering.
  * Double-check that you fixed the materials for use in P4G, if you didn't, the model will be invisible in game. The easiest way to do that is to copy the material data from another Persona's GMS file.
* The model is too dark.
  * You most likely forgot to fix the materials like I suggested. Go back to your GMS file and copy the material data from an existing Persona in the base game and paste it into your model's material data.
* The model is incorrectly positioned, or scaled in either the compendium or fusion screen.
  * This is due to the stock ps\_model.bin formatting for the model you replaced. To adjust these, you'll need to use [this tool](https://github.com/ShrineFox/P4GPS\_ModelEditor). Dump the file by opening cmbroot.arc in Amicitia and extracting ps\_model.bin. Once that is done, open it in the tool, find the model value by checking [this page](https://amicitia.miraheze.org/wiki/Persona\_4\_Golden/Personas), and make your adjustments there. You can also use[ cheat engine](https://www.cheatengine.org/) and [this tutorial](https://www.youtube.com/watch?v=H\_YEB8efylQ) to make your changes on the fly for later applying to the ps\_model.bin file itself.
* The model is incorrectly positioned during battles.
  * This is a similar problem to the last one, the stock positioning for the model is different than your model. To fix this, you'll need to use [010 Editor](https://www.sweetscape.com/010editor/), [this template](https://cdn.discordapp.com/attachments/1046042733946617886/1139287641494388816/P4G\_tbl\_2.bt), [these structs](https://cdn.discordapp.com/attachments/1046042733946617886/1139287641121112114/p4g\_enums.bt), and the MODEL.TBL file from init\_free.bin to fix the offset.&#x20;
* Some of the model's parts are blinking in and out of existence or rotating wildly.
  * This is due to missing blend subsets. If you didn't before, try optimizing your model with Sadoaiya to re-add blend subsets if they're missing. Once you're done, retest in-game.
* The model's animations aren't correct.
  * During the process of converting the FBX files back into a single animated GMO, you messed up. The order of animations should be something like this.
    * Skill (What plays when you cast a magic skill)
    * Phys (What plays when you use a physical skill)
    * Skill
    * Phys
    * Idle (What plays when viewing the model in the compendium.)
  * If the model doesn't match this order, go back and double-check the command you ran when converting your FBX files.

## Wrapping up

Assuming everything is in working order now, you've successfully and fully ported a DX2 model to P4G!&#x20;

