splat-points-3d
===============
Splats a point cloud onto a volumetric grid.

## Example

```javascript
var splat = require("splat-points-3d")
var pack = require("ndarray-pack")
var zeros = require("zeros")

var points = pack([
  [1, 0, 0],
  [0, 4, 0],
  [0, 0, 8]
])

var weights = pack([
  1,
  2,
  4
])

var grid = zeros([32, 32, 32])

splat(grid, points, weights, 3.0)
```

## Install

```
npm install splat-points-3d
```

## API

### `require("splat-points-3d")(out, points, weights, radius)`
Splats a collection of points onto a 3D volumetric grid using Lanczos/sinc filtering.  If you want a different kernel afterwards, you can apply a convolution via the FFT

* `out` is a 3D ndarray
* `points` is a `[n, 3]` shape ndarray encoding the x/y/z grid coordinates of the points to splat
* `weights` is a `[n]` shape ndarray
* `radius` is the radius of the point splat to draw


## Credits
(c) 2014 Mikola Lysenko. MIT License