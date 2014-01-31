"use strict"

var tape = require("tape")
var ndarray = require("ndarray")
var dirichlet = require("dirichlet")
var pack = require("ndarray-pack")
var splat = require("../splat")
var zeros = require("zeros")

tape("simple splat", function(t) {
  var points = pack([
    [1, 0, 0],
    [0, 4, 0],
    [0, 0, 8]
  ])
  var weights = pack([1, 2, 3])
  var grid = zeros([16, 16, 16])

  splat(grid, points, weights, 5)

  t.equals(grid.get(1, 0, 0), 1)
  t.equals(grid.get(0, 4, 0), 2)
  t.equals(grid.get(0, 0, 8), 3)

  t.end()
})