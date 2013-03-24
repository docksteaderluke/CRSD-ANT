Attention-Network-Test
======================
License
-------
This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License. To view a copy of this licence, visit http://creativecommons.org/licenses/by-nc-sa/3.0/ or send a letter to Creative Commons, 171 Second Street, Suite 300, San Francisco, California 94105, USA.

Any original or modified version of this software must attribute the original work to "idaios", and include a hyperlink (or at very least a URL reference) to http://idaios.com

Adding new stimulus images
-------------------------------
1. Find image with an aspect ratio of 1:1, preferably 100x100 pixels. Images must be of type .png to allow for transparency.
2. Create a second version of the image facing the opposite direction.
3. Place both images in the images/targets folder and rename them to "NAMELeft.png" and "NAMERight.png". For example: a horse picture would become "HorseLeft.png" and "HorseRight.png".
4. Add a reference to the image file on line 1 of the config/targetTypes.js file:
```javascript
var stimList = ["Arrow", "Truck", "Hand", "Airplane", "Car", "Horse"];
```