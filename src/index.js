module.exports = function check(str, bracketsConfig) {
  const configArray = [];
  bracketsConfig.forEach(item => configArray.push(item.join('')));
  while (true) {
    let x = 0;
    configArray.forEach(item => str.includes(item) ? str = str.replace(item, '') : x++);
    if(x === configArray.length) break;
  }
  if (str.length === 0) return true;
  return false;
}
