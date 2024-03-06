---
title: Reloaded Load Order
layout: page
parent: Using Mods
nav_order: 1
games: ['P3P', 'P4G', 'P5R']
---

In general your load order should not matter as most file types will be automatically merged by Persona Essentials, removing potential conflicts. 
The only major file types that are not automatically merged currently are BMDs which store messages and SPRs/SPDs which store sprites. 

## How Does Load Order Work?
Reloaded loads mods starting at the top and working its way down. That means if two mods edit the same file(s) and Persona Essentials can't resolve the conflict, a mod lower in the list will take priority.

In the example below, if the Custom Sub Menu and Detailed Descriptions mods both edited the same file which couldn't be merged, Detailed Descriptions' file would end up being used as it is higher priority.

![]({%link assets/images/using-mods/reloaded-priority.png %})

One exception to this rule is when a mod uses a file emulator to allow automatic merging. In this case it will **always take priority** over any mods that are not formatted for merging. If you notice this, the mods that aren't formatted for merging should be updated.

## Is My Load Order Right?

The easiest way to tell if your load order is good is to **play the game**. If you find that a mod isn't working then try these steps in order:
1. Check the mod's Gamebanana page. There may be known incompatibilities that are listed in the description or a comment.
2. Move the mod that isn't working to the **bottom** of the list so it becomes high priority. If this works then you'll likely notice that a different mod breaks, in that case reach out to one or both of the authors to see if they can help make the two compatible.
3. Disable all other mods. 
- If that fixes it, enable other mods a few at a time until you find which causes it to stop working. With that found, reach out to one or both of the authors to see if they can help make the two compatible.
- If it still doesn't work, ask for help in the [Persona Modding Discord server](https://discord.gg/naoto) or report the issue to the author directly.