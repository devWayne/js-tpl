js-tpl [![Build Status](https://travis-ci.org/devWayne/js-tpl .svg?branch=master)](https://travis-ci.org/devWayne/js-tpl )
============
> Javascript Template Engine

## APIs

##### tpl.compile(template)

Compiles the template string into a template function which only accepts one parameter, `it`.

- template `String` the template string

Returns `function(it)`

```
var templateFn = tpl.compile(template);
var result = templateFn(object);
