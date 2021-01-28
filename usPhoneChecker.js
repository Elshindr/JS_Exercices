function telephoneCheck(str) {
  //let telphTester;
  let src = str.slice();
  let regex = /^(1 ?)?(\([\d]{3}\)||[\d]{3})[ -]?[\d]{3}[ -]?[\d]{4}$/ ;
  let nbNumber = src.match(/\d/g).length;

  if(regex.test(src) && (nbNumber == 10 || nbNumber == 11)){
    return true;
  } else {
    return false;
  }
}

// Tests examples
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));