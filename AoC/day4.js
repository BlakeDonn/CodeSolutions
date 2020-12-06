const passVal = (passes) => {
  let counter = 0;
  passes.forEach((pass) => {
    let fields = Object.keys(pass);
    if (
      fields.length === 8 ||
      (fields.length === 7 && !fields.includes("cid"))
    ) {
      if (+pass.byr < 1920 || +pass.byr > 2002) return;
      if (+pass.iyr < 2010 || +pass.iyr > 2020) return;
      if (pass.eyr.length !== 4 || +pass.eyr < 2020 || +pass.eyr > 2030) return;
      if (!(pass.hgt.includes("cm") || pass.hgt.includes("in"))) return;
      if (pass.hgt.includes("cm")) {
        if (pass.hgt.length !== 5) return;
        if (+pass.hgt.slice(0, 3) < 150 || +pass.hgt.slice(0, 3) > 193) return;
      }
      if (pass.hgt.includes("in")) {
        if (pass.hgt.length !== 4) return;
        if (+pass.hgt.slice(0, 2) < 59 || +pass.hgt.slice(0, 2) > 76) return;
      }
      if (!pass.hcl.includes("#")) return;
      if (pass.hcl.includes("#")) {
        let code = pass.hcl.split("#")[1];
        if (code.length !== 6) return;
        let allowedChars = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
        ];
        for (i = 0; i < coe.length; i++) {
          if (!allowedChars.includes(pass.hcl[i + 1])) return;
        }
      }
      if (pass.ecl.length !== 3) {
        return;
      } else {
        let approvedEyes = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
        if (!approvedEyes.includes(pass.ecl)) return;
      }
      if (pass.pid.length !== 9) return;
      counter += 1;
    }
  });
  return counter;
};

//break string into array of objects
const fixData = () => {
  batch.forEach((x, i) => (batch[i] = batch[i].split(/\s+/)));
  let finalBatch = batch.reduce((acc, cur) => {
    newCur = cur.reduce((acc, cur) => {
      acc[cur.slice(0, 3)] = cur.slice(4);
      return acc;
    }, {});
    acc.push(newCur);
    return acc;
  }, []);
};
