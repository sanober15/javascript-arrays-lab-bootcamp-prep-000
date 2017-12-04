const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name);
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}
function appendKitten(name){
  var kit = [...kittens,name];
  return kit;
}
function prependKitten(name){
  var kit = [name, ...kittens];
  return kit;
}
function removeLastKitten(){
  return kittens.slice(-1);
}
function removeFirstKitten(){
  return kittens.slice(1);
}
