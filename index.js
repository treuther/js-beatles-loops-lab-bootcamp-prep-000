// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array;
}

 function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push(console.log("I love the Beatles!"));
  } while (iLoveTheBeatles(num) <= 15);
  return array;
}
