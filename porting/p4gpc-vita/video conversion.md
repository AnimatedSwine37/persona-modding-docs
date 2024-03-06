---
title: P4G PC Videos to Vita
layout: page
nav_order: 4
has_children: false
parent: P4G PC to Vita Porting
grand_parent: Porting
games: ['P4G Vita']
---

# P4G Vita Videos
This guide was written by [Dexxtrip](https://gamebanana.com/members/2225195) on Gamebanana / @bonq.com on Discord.

This guide covers the process of porting video mods from Persona 4 Golden on PC to Vita.

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Required Tools

| Tool      | Usage |
| ----------- | ----------- |
| [Handbrake](https://handbrake.fr/downloads.php)      | Needed for applying specific settings to P4G Vita Videos.      |

## Converting Videos

First, find the video you're interested in porting. I'll be demonstrating with the mod "Persona 4: The Animation OP 2 over Shadow World" for the remainder of the guide.

Once your mod is downloaded, locate the .USM file and change the extention to .mp4.

Preview your video in a MP4 player of choice before continuing.

![]({%link /assets/images/porting/p4gpc-vita/video-conversion/mp4 preview.png %})

Next, open Handbrake and drag your video in. We're going to need to change a few settings for optimal Vita playback.

{% tabs p4gvitavideos %}
{% tab p4gvitavideos Summary %}
![]({%link /assets/images/porting/p4gpc-vita/video-conversion/summary settings.png %})
{% endtab %}

{% tab p4gvitavideos Dimensions %}
![]({%link /assets/images/porting/p4gpc-vita/video-conversion/dimensions settings.png %})
{% endtab %}

{% tab p4gvitavideos Video %}
![]({%link /assets/images/porting/p4gpc-vita/video-conversion/video settings.png %})
{% endtab %}
{% endtabs %}

Once copied, go down to Save As, and choose a safe location to output to.

Go back up to the top and press the green play button to start encoding.

![]({%link /assets/images/porting/p4gpc-vita/video-conversion/encoding button.png %})

Wait for the video to be encoded, this can take between a few minutes and a few seconds depending on the speed of your computer.

Once it outputs your video, preview it quickly to check for any issues before adding to your Vita. Your video should be 960x544, and have a framerate of 29.97.

Once you've confirmed that the video is working as intended, let's move onto adding it to your Vita.

## Testing on Vita

Before you get started, please note that Videos cannot be installed via Aemulus packages as they're not contained inside of a .CPK file. Instead, transfer your video to a folder path like this: `ux0:rePatch/PCSx####/data/movie` 

Replace the PCSx#### with your equivalent path of your region of P4G.

Make sure to name your file to match the Vita format, intro videos should be named P4CTOP3.mp4, but you can check the rest by navigating to the same path on your Vita but in the app directory.

Once transferred, go back to your game and test the video.

Your video should play smoothly and not stutter or lag at any points.

Now, you may be wondering how to test other videos that aren't the intro. In the next section I'll show you an easy way to max out your TV listings, allowing you to play any cutscene at any time.

## Unlocking all Cutscenes (Optional)

First, backup your save in a decrypted format. I use Save Manager, which you can find [here.](https://github.com/d3m3vilurr/vita-savemgr/releases)

Next, navigate to this mod page [here](https://gamebanana.com/mods/50904) and download the mod attached.

After that, take the `system.bin` file and place it into the folder where you exported your save data to. Now, reimport the save data with the same tool as before.

Launch back into the game and instead of continuing into game, select TV Listings. 

![]({%link /assets/images/porting/p4gpc-vita/video-conversion/main menu.png %})

Next, select Daily Personamations. 

![]({%link /assets/images/porting/p4gpc-vita/video-conversion/tv listings view.png %})

Inside you'll find a list of all cutscenes in game, able to be played at any time.

![]({%link /assets/images/porting/p4gpc-vita/video-conversion/daily personamations.png %})

![]({%link /assets/images/porting/p4gpc-vita/video-conversion/cutscene list.png %})

Pick the cutscene you replaced and check that it's running smoothly.

## Wrapping Up

Once you've confirmed that your ported video functions perfectly, **congrats!** You've successfully ported a video mod to Persona 4 Golden on Vita.