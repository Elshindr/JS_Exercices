function rot13(str) {
  let src = str.slice();
  let strMsg = "";

  for(let i = 0; i < src.length; i++){
    if(src[i].match(/[A-M]/)){ // If char between A and M
      strMsg = strMsg + String.fromCharCode(src.charCodeAt(i) + 13);
    }
    else if(src[i].match(/[N-Z]/)){ // If char between N and Z
      strMsg = strMsg + String.fromCharCode(src.charCodeAt(i) - 13);
    }
    else{
      strMsg = strMsg + src[i];
    }
  }

  return strMsg;
}

// Tests Examples
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SE.5RR? CVM7MN!"));
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));