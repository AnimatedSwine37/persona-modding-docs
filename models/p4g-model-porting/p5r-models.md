---
title: P5R Models
layout: page
nav_order: 5
grand_parent: Models
parent: P4G Model Porting
games: ['P4G','P4G Vita']
---

This guide was written by [Dexxtrip](https://gamebanana.com/members/2225195) on Gamebanana / @bonq.com on Discord.

This guide covers the process of porting Persona designs from Persona 5 Royal to Persona 4 Golden. These instructions apply to both the PC and Vita versions unless specified otherwise.

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Required tools

| Tool      | Usage |
| ----------- | ----------- |
| [GFD Studio](https://github.com/DeathChaos25/GFD-Studio)      | Needed for viewing P5R GMD models     |
| 3DS Max   | Modeling program needed for porting models.        |
| [GMD Import Script](https://drive.google.com/drive/folders/1isBtlZN7oJ3GQpYrZAiTvRsnYGhS7mzR)   | The script needed for importing the .GMD and .GAP files from P5R.      |
| [GMOConv & GIMConv](https://cdn.discordapp.com/attachments/925531160392658944/1038502426686259240/PSP_Tools.7z)  | Needed for converting exported FBX into usable GMO and converting textures. |
| [Sadoaiya](https://pioziomgames.github.io/programs/sadoaiya) | Needed for optimizing models.|
| [Notepad++](https://notepad-plus-plus.org)   | Recommended for fixing materials and changing texture file extensions.    |
| [GMOView](	https://cdn.discordapp.com/attachments/925531160392658944/1038502426686259240/PSP_Tools.7z)   | Checking your model visually.|
| [GMO2AMD Python Script](https://github.com/Timo654/gmo2amd) | Adding the AMD header to GMO files. |
| A complete dump of the game   | For working with any and all files.     |


## Before you get started

First, you need to find the model you want to import by dumping it from your own copy of P5R. 

P5R Persona models are located at model/character/persona, you can find which ID goes with what Persona by checking this [list here](https://amicitia.miraheze.org/wiki/Persona\_5\_Royal/Personas).

Next, open up GFD studio and drag your .GMD file inside to verify it's the one you want to work with. Also, drag the corresponding .GAP file inside to check its animations.


![]({%link /assets/images/models/p5r-models/gfd studio preview 1.png %}){: .center-image }

![]({%link /assets/images/models/p5r-models/gfd studio preview 2 anim.png %}){: .center-image }

To move the camera position, hold the middle mouse button and drag to move. To rotate the camera position, hold Alt and then drag along to rotate.

If you're working a model ported to P5R, that doesn't contain corresponding .GAP files, you can typically pull the .GAP files from your own personal dump of the game.

All good? You can continue with the rest of the guide.

## Model Importing

Open 3DS Max.

Click Script > Run Script > then open the 3DS Max Import Script, a new window should pop up that looks like this:&#x20;

![]({%link /assets/images/models/p5r-models/gmd import script window.png %}){: .center-image }

Click Import File.

Navigate to your model and add the model that starts with "ps0."

Click Load Model in 3DS Max.

Your model will be rotated along the floor, let's fix that.

![]({%link /assets/images/models/p5r-models/base model viewport.png %}){: .center-image }

Move over to the left side and select the bone named "Root"

![]({%link /assets/images/models/p5r-models/p5r root bone.png %}){: .center-image }

Next, move up to the top and right click the rotate option shown here:

![]({%link /assets/images/models/p5r-models/p5r rotate selection.png %}){: .center-image }

Next, adjust the X and Z values so that the model is facing up and towards the back of the scene. The easiest way to do is to set the X value to 0, and the Z value to 180. Your viewport should look like this:

![]({%link /assets/images/models/p5r-models/correct model viewport rotation.png %}){: .center-image }

Now, let's export this base model. Move up to the top and select File > Export > Export

![]({%link /assets/images/models/p5r-models/file export.png %}){: .center-image }

I recommend naming the exported file something like the name of the Persona followed by what it is. In this case, I'd export the file as something like, "fafnir model.fbx"

In the export options, set the options to "ASCII" and "FBX 2009" then export your base model somewhere safe. 

![]({%link /assets/images/models/p5r-models/export options.png %}){: .center-image }

Done? Now we can carry on with animations.

## Importing Animations

Go back to the Import Script and select "Import File" then select the bps file in the same folder as your model.

This will bring up an option to select Animation Index, these values match what are shown in GFD Studio.

![]({%link /assets/images/models/p5r-models/import script load animation.png %}){: .center-image }

{: .info }
> Here's a handy cheat sheet for working with Persona 5 Royal models.
>
> Animation 0 is Idle
>
> Animation 5 is Physical
>
> Animations 6-10 are Magic

Once an animation value is selected, click load animation.

Your model will return to it's original rotation, this is intentional so carry on.

After an animation is selected, verify that it's working by pressing the Play button near the bottom, as shown here:

![]({%link /assets/images/models/p5r-models/play animation button location.png %}){: .center-image }

{: .info }
> Animation playing strangely? Bones and limbs stretching out in weird ways?
>
> This typically means your model wasn't properly converted over to P5R. Assuming you're working with a model mod, try working with the base file from the original game instead. In most cases, that means grabbing the model from SMT DX2, [here's a link to jump that guide.]({%link models/p4g-model-porting/dx2-models.md %})

Once you've verified that the animation is playing correctly, rotate the model again.

The same information applies here like before, select the root bone on the left, right click the rotate option, then rotate the model so it's facing up and towards the back of the scene.

You should have a viewport like this:

![]({%link /assets/images/models/p5r-models/correctly rotated viewport.png %}){: .center-image }

Once you've got the desired rotation, you'll need to export the model again with the same settings as last time.

Repeat these steps for the remaining animations.

Next, we'll go over an optional addition you can add to increase the quality of your model.

## Smooth Magic Animation (Optional)

This next part is entirely optional, but it's an added bonus. In this section, I'll describe how to merge animations 6-10 to create a fluid Magic animation, just like in P5R. 

If you're not interested in a smoother animation, or are just interested in saving time, Animation 7 can provide the same effect on it's own.

First, in the GMD Import script, unselect Reset Animation on Load.

![]({%link /assets/images/models/p5r-models/smooth magic anim import script options.png %}){: .center-image }

Next, select Animation Index 6 and click Load Animation. The model will be rotated along the floor again, but we won't fix this until the very end.

After that, go to the time configuration option shown here:

![]({%link /assets/images/models/p5r-models/configure frame end start option.png %}){: .center-image }

In the Start Time, set the value to a negative number above 100, like this:

![]({%link /assets/images/models/p5r-models/frame start value shown.png %}){: .center-image }*You may need to set this number higher later on depending on the number of frames.*

Now, highlight all the bones on the left. Triple check that all bones are selected or you may have issues with the animation later. Next, select all the key frames shown at the bottom and move them to the very beginning of the animation timing, like this:

![]({%link /assets/images/models/p5r-models/shown negative frame keys.png %}){: .center-image }

Once it's moved, go back to the Import Script again and now load Animation 8. Your frame timings will disappear, but they're still there. Go back to the Time Configuration screen and extend the Start Time to the same value as before.

{: .info }
> Animation 7 is skipped because it's mostly the Magic animation being held. Not needed for Persona 4 Golden at all, but if you'd like to add it, you can.
>

Move these new frames to the end of your previous animation.

![]({%link /assets/images/models/p5r-models/shown merged frame keys.png %}){: .center-image }

Repeat these steps for Animations 9, and 10.

Once all animations are merged and in a line, go back to the configuration screen and extend the end to the same value as the Start Time, but positive this time.

Select all your keyframes and move them to the very first frame, frame zero.

Go back to the time configuration screen and remove the frames before zero.

Now, play your animation to verify that everything worked as intended.

You should end up with frame keys that look like this:

![]({%link /assets/images/models/p5r-models/final merged keyframes.png %}){: .center-image }

{: .info }
> Getting weird animation behavior when played?
>
> Verify that all bones in all trees are selected during the process. You may need to right click in the bones and expand all of them, then press CTRL+A to select them all.

Once you've verified that it's working and are satisfied with the result, rotate your model like before, upright and facing towards the back of the scene. Once that's done, export the same way as before. Save the model in the same location as the other models.

## Model Converting

Once you have all 4 of your fbx files for the model, you'll need to merge them as a single model with all 5 motions. Open up a command prompt next to GMOConv and type in a command like this

```
Gmoconv.exe model.fbx -S -motions attack.fbx skill.fbx attack.fbx skill.fbx idle.fbx
```

This command does several things, so let's break it down into something understandable.

* **First**, it converts all of the fbx files into GMO files for use in P4G.
* **Next**, it merges all of the animation data into the first model.
* **Finally**, it extracts that model as a GMS for easy editing.

Let's verify that the process went over smoothly by opening up our GMO in GMOView. 

Once open, press 2 on your keyboard to open up the animation config and flick through them using the arrow keys to ensure that the process went over smoothly. Here's an example of what I mean:

![]({%link /assets/images/models/p5r-models/animation conversion bad and good.png %}){: .center-image }

&#x20;You should have a total of 5 animations, the first 4 being Phys and Skill repeated twice, and the last one being an Idle position for use in the Compendium.

Once you've verified that the model is working, you can move on to texture importing.

## Texture Importing

While converting with gmoconv, you may have noticed it was throwing out errors about being unable to convert DDS to TM2, in this section we'll fix that.

{: .warning }
> For Vita users, you'll need to take an extra step to prevent crashes on original hardware. Instead of converting DDS directly to TM2, first, convert the DDS to PNG, halve the resolution, then convert the PNG to TM2.

Let's check which of the DDS files are actually necessary for the model. Open up your GMS file in a text editor of choice and look for the texture location. For easier navigation, press CTRL+F on your keyboard and then search for this string:
```
Texture "
```

It should point to a texture location similar to this:

![]({%link /assets/images/models/p5r-models/old texture name location.png %}){: .center-image }*The default path contained in the GMS file will always point to where your GMD and GAP files are located, since the DDS files will have been extracted during the 3DS Max process.*

Take note of which textures are mentioned here, as those are the only ones that are actually required for conversion / importing.

Once located, change the extension to .TM2 and carry on. Your file should look something like this once you're done:

![]({%link /assets/images/models/p5r-models/new texture name location.png %}){: .center-image }

Now that we've located and defined which textures are required, let's convert them to TM2.

Next, open a command prompt at the location where gimconv is located and pass an argument like this for each necessary dds file:
```
gimconv 'path to dds' -o 'output path for new tm2'
```

Once converted, go back to your GMS file and change the path if needed. You'll want to make sure that the path shown in the GMS actually contains the .TM2 file or else it won't be applied to the model.

Next, we'll need to convert our GMS file back into a GMO via these two methods.

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

With your newly made GMO, check it again in GMOView. Assuming the process went right, your model should now be fully and properly textured. If you missed any during the editing process, GMOView will let you know with a warning on the left, like this:

![]({%link /assets/images/models/p5r-models/missing texture warning.png %}){: .center-image }

Before we get to testing in game, we have one last thing to check, and it's incredibly important.

## Material Fixing

Fixing the materials is a very important step towards getting your model to work in Persona 4 Golden. Without it, your model could either be invisible, too bright, or just too dark.

First, locate a Persona model from the base game, in my case, I'll use Surt.

Extract the Surt AMD as a GMS by passing a command like this in GMOConv:
```
GMOConv -S (path to gmo)
```

This will extract the AMD as a GMS file. Next, move to the material section and copy all the data above Layer, as shown here:

![]({%link /assets/images/models/p5r-models/surt material data.png %})

Paste this copied data into your Persona's material data section as well:

![]({%link /assets/images/models/p5r-models/old material data.png %})

![]({%link /assets/images/models/p5r-models/new material data.png %})

Finally, reconvert your model back to a GMO like we did before. You should notice a brightness increase as well. Now we can move onto converting to AMD.

## AMD Conversion

Once you've verified that the model has all the necessary textures, and has it's materials fixed, you'll need to convert the GMO into an AMD for testing in game. Pass a command like either of these to do so.

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

Once you've guaranteed your model is in working order, we can continue onto testing in game.

## Testing in game

The easiest way to test your model in-game is to replace an existing model and check that instead, here's a[ list of what models go with which Persona](https://amicitia.miraheze.org/wiki/Persona\_4\_Golden/data.cpk/model/persona).

Testing in game is a very important process, if you're interested in publishing this model as a mod, you want to make sure nobody will have problems with it. I've taken the time to generate a list of things to check for while you're in game:

* Model visibility (Does the model actually render?)
* Positioning and scale in the compendium (Is the model centered in the compendium screen?)
* Positioning and scale in the fusion screen (Is the model centered in the fusion screen?)
* Positioning and scale in battles (Is the model positioned correctly in battles? Is it clipping into the floor or too high up?)
* Flashing & Clipping bits (Are any parts of the models acting irregularly?)

Here are a few visual examples of what I mean:

![]({%link /assets/images/models/smt-v-models/scaling comp example.png %}){: .center-image }
*Example of good and bad compendium scaling and positioning. You want to aim for the image on the right where the Persona takes up as much of the empty space.*

![]({%link /assets/images/models/smt-v-models/pos battle example.jpg %}){: .center-image }
*Example of bad battle positioning, take note of the model clipping into the floor, you don't want that.*

![]({%link /assets/images/models/smt-v-models/model errors example.gif %}){: .center-image }*Example of irregular model performance. This is typically caused by missing blend subsets.*

Once you've checked all of these, and can verify that they are working perfectly, **congrats!** You've successfully ported a model from P5R!.

In the next section, we'll go through potential problems you may have faced and how to fix them.

## Troubleshooting

Here are some possible solutions to problems you may be having.

* The model is invisible / not rendering properly.
  * Double-check that you fixed the materials for use in P4G, if you didn't, the model will be invisible in game. The easiest way to do that is to copy the material data from another Persona's GMS file.
* The model is facing the wrong direction in one or more animations.
  * You most likely forgot to rotate the model by 180 degrees again after importing another animation. Go back to 3DS Max and reimport the animation, then rotate it by 180 degrees on the Z axis, and 90 degrees on the X axis, then export again.
* The model is incorrectly positioned, or scaled in either the compendium or fusion screen.
  * This is due to the stock ps\_model.bin formatting for the model you replaced. To adjust these, you'll need to use [this tool](https://github.com/ShrineFox/P4GPS\_ModelEditor). Dump the file by opening cmbroot.arc in Amicitia and extracting ps\_model.bin. Once that is done, open it in [the tool]((https://github.com/ShrineFox/P4GPS\_ModelEditor)), find the model's value by checking [this page](https://amicitia.miraheze.org/wiki/Persona\_4\_Golden/Personas), and make your adjustments there. You can also use[ cheat engine](https://www.cheatengine.org/) and [this tutorial](https://www.youtube.com/watch?v=H\_YEB8efylQ) to make your changes on the fly for later applying to the ps\_model.bin file itself.
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

Assuming everything is in working order now, you've successfully and fully ported a P5R model to P4G!&#x20;
