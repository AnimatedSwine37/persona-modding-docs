---
title: Music
layout: page
nav_order: 3
has_children: true
include_toc: true
---

In P3P, audio is stored as loose files in umd1.cpk, organized into subfolders based on purpose. In P4G and P5R, they are instead packed within ACB and AWB archives (they come in pairs). Replacing files in an ACB/AWB archive is not unlike replacing files in a PAK archive, except that you'll be making a folder called FEmulator/AWB instead of FEmulator/PAK.

## Tools You'll Need
- The audio you're adding in WAV or AIFF format
- [Audacity](https://www.audacityteam.org/download/)
- [AtomEncd](https://drive.google.com/file/d/1Jx9NBu40XUcJb0U4MdsVjPV84UTzWcpy/view)
- (For P5R) [This script for encrypting ADX files](https://drive.google.com/file/d/1zHiVWwpjYipK-vrvUOAtCa9zplpel8km/view)
- (Recommended for listening) [Foobar2000](https://www.foobar2000.org/download)
- (If unpacking/repacking AWB) [Sonic Audio Tools](https://github.com/blueskythlikesclouds/SonicAudioTools)

## The Usual Method

### Locate the audio to be replaced

The IDs for BGMs are listed on [Amicitia Wiki](https://amicitia.miraheze.org/wiki/Main_Page); for other audio, you may need to do some digging (note: many pages on the wiki were originally written with the original PS releases in mind, though the file structure is mostly the same). Create your paths in your mod folder, eg. FEmulator/AWB/BGM.AWB for replacing P5R bgm.

### Convert your audio file

If you're replacing a BGM, you'll want to first chuck your audio file into Audacity in order to find the song's loop point. To do this, select the start and end of the section of song you want to loop, then set the selection toolbar (at the bottom of the screen) to "Start and End of Selection" with the time displayed as samples.

![]({{ site.baseurl }}/assets/images/music/audacity.png)

Then, open your audio in AtomEncd. Set encode quality to highest, resampling quality to high, and codec to HCA for P4G or ADX for P3P and P5R. For music, set loop options to Custom Loop and enter the start and end samples given by Audacity. Hit "encode" and name the file whatever the unmodded file was called.

![]({{ site.baseurl }}/assets/images/music/atomencd.png)

### P5R ADX Encryption

Now, P5R ADXs are encrypted which means you'll have to do an extra step. Put your new ADX file in your Decrypt_P5R_ADX folder, navigate to the folder in command line, and run:

{: .todo}
commands for command prompt

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

Place your audio in the correct directory in your mod.

## Repacking an AWB file

This method of replacing audio was used for P4G and P5R before the release of AWB Emulator (what allows us to replace individual audio files in an AWB archive), but nowadays the AWB Emulator method is preferred in the interest of saving space. Still, there are niche cases where one may want to repack an AWB instead.

For this, open your Sonic Audio Tools folder and drag the ACB file onto AcbEditor.exe. This should give you a dump of the **entire** contents of the ACB/AWB in a folder. Create your ADX/HCA as normal, but then place it in the folder created by the dump. Then, repack the ACB and AWB by dragging the folder onto ACBEditor. In your mod, create the path P5REssentials/CPK/namethiswhateveryouwant/path/to/the/awb and place your repacked ACB and AWB inside.
