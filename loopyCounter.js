function loopyLighthouse (range, multiples, words) {
  for (var i = range[0]; i < range[1] + 1; i++) {
    var output = i;
    if (i % (multiples[0] * multiples[1]) === 0) {
      output = words[0] + words[1];
    } else if (i % multiples[0] === 0) {
      output = words[0];
    } else if (i % multiples[1] === 0) {
      output = words[1];
    }

    console.log(output);
  }
}