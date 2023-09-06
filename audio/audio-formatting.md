---
title: Audio Editing and Formatting
layout: page
parent: Audio
nav_order: 1
games: ['P3F', 'P3P', 'P4G', 'P5R']
---

## Tools You'll Need
- The audio you're adding in WAV or AIFF format
- [Audacity](https://www.audacityteam.org/download/)
- [AtomEncd](https://drive.google.com/file/d/1Jx9NBu40XUcJb0U4MdsVjPV84UTzWcpy/view)
- (For P5R) [This script for encrypting ADX files](https://drive.google.com/file/d/1zHiVWwpjYipK-vrvUOAtCa9zplpel8km/view)
- (Recommended for listening) [Foobar2000](https://www.foobar2000.org/download)
- (If unpacking/repacking AWB) [Sonic Audio Tools](https://github.com/blueskythlikesclouds/SonicAudioTools)

## Location and Format

The location and format of audio files depends on the game being modded.

- P3F: audio is stored as loose ADX files in `BGM.CVM`.
- P3P: audio is stored as loose ADX files in `data/umd1.cpk/data/sound`.
- P4G: audio is stored as HCA files packed within AWB archives in `data.cpk/sound/adx2`. Some AWB archives come in pairs with associated ACB files.
- P5R: audio is stored as ADX files packed within ACB archives in `sound_e.cpk` for English voices, `sound_j.cpk` for Japanese voices, and `base.cpk/sound` for all other sounds. Some AWB archives come in pairs with associated ACB files.

## Audio Editing

Music and certain sound effects use defined loops so they can play continuously as long as they are needed. If editing such audio files, you need to set up a proper loop. In some cases, this is as simple as defining a start and end point, and in other cases more advanced audio editing needs to be done in order to ensure a clean loop.

{: .todo }
Add a section for basic audio editing. Maybe add a section for advanced audio editing

If replacing looped sound such as music or some audio effects, open your replacement audio file in [Audacity](https://www.audacityteam.org/download/) in order to find the song's loop point. To do this, select the start and end of the section of song you want to loop, then set the selection toolbar (at the bottom of the screen) to "Start and End of Selection" with the time displayed as samples.

![]({%link assets/images/audio/audacity.png %})

Mark down the start and end points somewhere, as you will use them when encoding the song. Export the file as a .wav.

## Encoding Audio

[AtomEncd](https://drive.google.com/file/d/1Jx9NBu40XUcJb0U4MdsVjPV84UTzWcpy/view) is used to encode the audio files for the given game.

![]({%link assets/images/audio/atomencd.png %})

Select your desired audio file by clicking on the `...` button to the left of the Encode button. Enable looping by clicking the Loop switch below the Encode button. Under Loop Options, set the switch to Custom Loop, then enter the Start and End points you found earlier (no commas). Additionally, set Quality to High, Encode Quality to Highest, and the codec as follows:

- P3F, P3P, P5R: ADX
- P4G: HCA

Then click Encode and save your encoded audio file with a desired name and location. Note that you need to append the file extension (.ADX or .HCA) in order for the file to function properly.

## P5R ADX Encryption

{: .info }
> This step is only necessary for P5R audio editing. If you are editing P3P or P4G audio, skip this step.


P5R ADXs are encrypted, so an extra step is required to make your new audio file work ingame. Put your new ADX file in your Decrypt_P5R_ADX folder, navigate to the folder in command line, and run:

{: .todo}
commands for command prompt. make this section a little more detailed.

{% tabs encrypt %}
{% tab encrypt Powershell %}
```
cmd /c "for %f in (*.adx) do vgaudiocli.exe  %~nf.adx %~nf_enc.adx --keycode 9923540143823782"

$enc_adxs = Get-ChildItem .\*enc.adx* -recurse

foreach ($enc_adx in $enc_adxs){

    $stream = [System.IO.File]::ReadAllBytes($enc_adx)

    $stream[19] = 0x09

    [System.IO.File]::WriteAllBytes($enc_adx, $stream)

}
```
{% endtab %}
{% tab encrypt Wine %}
```
wine cmd /c "for %f in (*.adx) do vgaudiocli.exe  %~nf.adx %~nf_enc.adx --keycode 9923540143823782"

for f in *_enc.adx; do
    printf '\x09' | dd of="$f" bs=1 seek=19 count=1 conv=notrunc
done
```
{% endtab %}
{% endtabs %}

(If, conversely, you need to listen to P5R audio without having your ears blasted, you would run:)

{% tabs decrypt %}
{% tab decrypt Powershell %}
``` powershell
cmd /c "for %f in (*.adx) do vgaudiocli.exe  %~nf.adx %~nf_dec.adx --keycode 9923540143823782"

$dec_adxs = Get-ChildItem .\*dec.adx* -recurse

foreach ($dec_adx in $dec_adxs){

    $stream = [System.IO.File]::ReadAllBytes($dec_adx)

    $stream[19] = 0x00

    [System.IO.File]::WriteAllBytes($dec_adx, $stream)
```
{% endtab %}
{% tab decrypt Wine %}
```
wine cmd /c "for %f in (*.adx) do vgaudiocli.exe  %~nf.adx %~nf_dec.adx --keycode 9923540143823782"

for f in *_dec.adx; do
    printf '\x00' | dd of="$f" bs=1 seek=19 count=1 conv=notrunc
done
```
{% endtab %}
{% endtabs %}