## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

image crediting:
<a target="_blank" href="https://icons8.com/icon/97310/pink-macaron">Pink Macaron</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/46370/bread">Bread</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/TiHiJV8kPqNT/merry-pie">Merry Pie</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/mbI5E8UQHFoP/female-baker-skin-type-1">Female Baker Skin Type 1</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/QtSn5IIDym6l/bakery">Bakery</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
Image by <a href="https://pixabay.com/users/vvadyab-13368278/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4423853">Pontep Luangon</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4423853">Pixabay</a>
<a href="https://www.flaticon.com/free-icons/bakery" title="bakery icons">Bakery icons created by surang - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/pastry-bag" title="pastry bag icons">Pastry bag icons created by Graphix's Art - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/super-bowl" title="Super Bowl icons">Super Bowl icons created by Smashicons - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/baker" title="baker icons">Baker icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/samhain" title="samhain icons">Samhain icons created by Freepik - Flaticon</a>

## html precode

header: Baker Battle
css grid, 3 columns, two rows
section baker:
baker hp
baker img
section empty
section opponent:
text input for opponent names
linked buttons
div:
opponent img
opponent hp
new row
appearing over bg
section empty
section empty
section score:
box
Items baked (score)

## events

click add opponent
click opponent
click "clean the kitchen"
