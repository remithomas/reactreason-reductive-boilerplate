// Generated by BUCKLESCRIPT VERSION 4.0.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Reductive = require("reductive/src/reductive.js");

function logger(store, next, action) {
  console.log(action);
  var returnValue = Curry._1(next, action);
  console.log(Reductive.Store[/* getState */5](store));
  return returnValue;
}

exports.logger = logger;
/* Reductive Not a pure module */