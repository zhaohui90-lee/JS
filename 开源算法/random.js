function randomSerial() {
  let d = new Date().getTime();
  let uuid = "SYRMYY" + 'xxxxaaaaaaay'.replace(/[a-z]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

console.log(randomSerial());