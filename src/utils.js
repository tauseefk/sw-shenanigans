'use strict';

function getArgs(func) {
  // First match everything inside the function argument parens.
  var args = func.toString().match(/function\s.*?\(([^)]*)\)/);

  if (args && args.length && args.length > 1) {
    args = args[1];
  } else {
    args = func.toString().match(/^\(([^)]*)\)\s*?\=\>/)[1];
  }

  // Split the arguments string into an array comma delimited.
  return args.split(',').map(function (arg) {
    // Ensure no inline comments are parsed and trim the whitespace.
    return arg.replace(/\/\*.*\*\//, '').trim();
  }).filter(function (arg) {
    // Ensure no undefined values are added.
    return arg;
  });
}