function convertToRoman(num) {
    // Create arrays and variables
    let strRom = '';
    let indexSym = 0;
    let arrSym = [[1, 'I'], [5, 'V'], [10, 'X'], [50, 'L'], [100, 'C'], [500, 'D'], [1000, 'M']];
    let arrDec = num.toString().split('');

    // Multiply arrDec[i] * 10^i, then reverse it
    for (let i = 0; i < arrDec.length; i++) {
        arrDec[i] = arrDec[i] * Math.pow(10, arrDec.length - 1 - i);
    }
    arrDec = arrDec.reverse();

    let nbRepeat;
    // Fill string with roman numeration
    for (let i = 0; i < arrDec.length; i++) {
        nbRepeat = arrDec[i] / Math.pow(10, i);
        // V: 4(part2) and num >= 5
        if (/[4-8]/.test(arrDec[i])) {
            //I: 6 7 8 
            while (/[6-8]/.test(arrDec[i]) && nbRepeat > 5) {
                strRom = arrSym[indexSym][1] + strRom;
                if (/[14]/.test(arrDec[i])) {
                    nbRepeat = 0;
                } 
                else {
                    nbRepeat -= 1;
                }
            }
            strRom = arrSym[indexSym + 1][1] + strRom;
        }
        // I: num < 5 And 4(part1) 
        while (/[1-4]/.test(arrDec[i]) && nbRepeat > 0) {
            strRom = arrSym[indexSym][1] + strRom;
            if (/[14]/.test(arrDec[i])) {
                nbRepeat = 0;
            } else {
                nbRepeat -= 1;
            }
        }

        // X: 9
        if (/[9]/.test(arrDec[i])) {
            strRom = arrSym[indexSym][1] + arrSym[indexSym + 2][1] + strRom;
        }
        indexSym += 2;
    }

    return strRom;
}

//Test Example
console.log(convertToRoman(4));