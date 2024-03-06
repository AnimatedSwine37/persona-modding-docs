---
title: Publishing A Mod 
layout: page
parent: Getting Started
nav_order: 4
games: ['P3P', 'P4G', 'P5R']
---

Now that you have [made a mod](making-a-mod) and [replaced some files](replacing-files) with it, you'll want to share your creation with the world.

{: .info }
> The majority of Persona mods are posted on [GameBanana](https://gamebanana.com/). This guide will assume you are publishing your mod there.

You will need to set up a mod page to get the mod ID, export your mod with the ID, and then post the mod on your mod page.

## Setting up a mod page

It is important to set up a mod page first, as the ID of your mod page is required in order to set up automatic updates in Reloaded. Otherwise, mods will not be available for one-click install on GameBanana and they won't receive updates.

Go to the page of the game you're modding for, and click the Add button.

![]({{ site.baseurl }}/assets/images/getting-started/publishing-a-mod/gb-add.png)

Select an appropriate section for your mod; most mods will simply fall under `Mod`, but some may fall under `Sound` for music/SFX mods, `Tool` for applications related to mod making, etc.

Fill out the required fields:
* Main
	* Mod Title
	* Mod Category: *Choose the category that best describes your mod.*
	* Body
* Ownership
	* Is this a port?
	* Did you create this Mod?
	* Authors
	* Screenshots
	* Files: *Placeholder file(s) can be uploaded for now, but make sure to add the relevant mod files before posting the mod publicly.*
* Settings
	* Access: ***Set this to private!***

![]({{ site.baseurl }}/assets/images/getting-started/publishing-a-mod/gb-private.png)

{: .warning }
> Before saving, **remember to set the mod access to Private!** Otherwise you will publicly publish a mod with no content in it!

Click Submit at the bottom, and you will be taken to the mod page. Your mod ID is found in the URL. Save this for the next step!

![]({{ site.baseurl }}/assets/images/getting-started/publishing-a-mod/gb-id.png)

## Setting Update Support

In Reloaded, select your mod, click Edit, and go to **Update Support**.

Click on GameBanana, then set `ItemId` to the mod ID you got previously. Also set `ItemType` to the category your mod is in (Mod, Sound, etc).

![]({{ site.baseurl }}/assets/images/getting-started/publishing-a-mod/r2-update-support.png)

## Publishing Your Mod

Now select your mod and click Publish. Set your Publish Target to GameBanana, set a readme and/or changelog file as desired, then click Publish.

![]({{ site.baseurl }}/assets/images/getting-started/publishing-a-mod/r2-publish.png)

{: .info }
> For more details, click on Publishing Tutorial or go to the [Reloaded II documentation](https://reloaded-project.github.io/Reloaded-II/CreatingRelease/).

After publishing your mod, it will export the files to the directory shown in the Publish Mod window and automatically open a new window to that filepath.

![]({{ site.baseurl }}/assets/images/getting-started/publishing-a-mod/export.png)

There will be two files:
* A compressed file with your mod in it
* A JSON file with update information

Upload both of these files to the Files section of your mod page, finalize any other fields you may have left as placeholders, set mod access to Public, and then click Submit to publicly publish your mod!