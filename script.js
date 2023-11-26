function brokenKeys(Right, Wrong) {
    let brokenKeys = [];
    for (let i = 0; i < Right.length; i++) {
      if (Right[i] !== Wrong[i]) {
        if (!brokenKeys.includes(Right[i])) {
          brokenKeys.push(Right[i]);
        }
      }
    }
    return brokenKeys;
  }
  console.log(brokenKeys("fikrcamp bootcamp", "fikrcomp boorcamp")); 
  console.log(brokenKeys("Hello Welcome", " Hjjlo Welcome"))