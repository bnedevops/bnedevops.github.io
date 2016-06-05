## Brisbane DevOps Tech Radar

[Live Chart](http://bnedevops.github.io/)

([Adapted From Brett Dargan's Tech Radar](https://github.com/bdargan/techradar))

### Make a Change
The graph is rendered from data contained in

```
./radars/radarData,js
```

To add and change data points edit the data in this file.

Changes will be accepted via **pull request**.
As soon as changes are merged they will appear in the live chart.

## How to use?

The data in ```radarData.js``` follows the follow conventions.

r = radius, and t = theta; the degrees in radians. With 0/360 degrees being the typical right hand x line rotating in an anti-clockwise direction.

See http://en.wikipedia.org/wiki/Polar_coordinates for more details.

Eg. ```{name:'Cool Tech', r:50, t:30}```
appears in the Top Right Quadrant, in the inner most "Adopt" Sector.

Eg. ```{name:'Bright Shiny Toy 5', r:390, t:30}```
Appears in the Top Right Quadrant, in the outer most "Hold" Sector.
