---
title: Aemulus Load Order
layout: page
parent: Using Mods
nav_order: 2
games: ['P3F', 'P4G Vita']
---

In general your load order should not matter as most file types will be automatically merged by Aemulus, removing potential conflicts. 

## How Does Load Order Work?
By default Aemulus loads mods starting at the bottom and working its way up. That means if two mods edit the same file(s) and Aemulus can't resolve the conflict, a mod higher in the list will take priority.

In the example below, if the Fortune Teller and Dojima's Coffee mods both edited the same file which couldn't be merged, Fortune Teller's file would end up being used as it is higher priority.

![]({%link assets/images/using-mods/aemulus-priority.png %})

The way priority is decided can be reversed by clicking the ↕ button in the top right. When you do this, you'll notice the Package Priority indicator on right of your mod list switches to show priority goes down rather than up.

![]({%link assets/images/using-mods/aemulus-reverse-priority.png %})

## Is My Load Order Right?

The easiest way to tell if your load order is good is to **play the game**. If you find that a mod isn't working then try these steps in order:
1. Check the mod's Gamebanana page. There may be known incompatibilities that are listed in the description or a comment.
2. Move the mod that isn't working to the **top** of the list so it becomes high priority then rebuild. If this works then you'll likely notice that a different mod breaks, in that case reach out to one or both of the authors to see if they can help make the two compatible.
3. Disable all other mods then rebuild. 
- If that fixes it, enable other mods a few at a time (building after each change) until you find which causes it to stop working. With that found, reach out to one or both of the authors to see if they can help make the two compatible.
- If it still doesn't work, ask for help in the [Persona Modding Discord server](https://discord.gg/naoto) or report the issue to the author directly.