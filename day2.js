

function getGrade(score) {
    let grade;
    // Write your code here

    (score > 25 && score <= 30) ? grade = 'A' :
        (score > 20 && score <= 25) ? grade = 'B' :
            (score > 15 && score <= 20) ? grade = 'C' :
                (score > 10 && score <= 15) ? grade = 'D' :
                    (score > 5 && score <= 10) ? grade = 'E' :
                        (score > 0 && score <= 5) ? grade = 'F' : ""


    return grade;
}




function getLetter(s) {
    let letter;
    //we'll use 4 regular expressions to check the 4 cases
    //depending on which case returns true we log the letter

    const checkIndex = s.toLowerCase();
    const regCheckGroupA = new RegExp(/\b[aeiou]/)
    const regCheckGroupB = new RegExp(/\b[bcdfg]/)
    const regCheckGroupC = new RegExp(/\b[hjklm]/)
    const regCheckGroupD = new RegExp(/\b[npqrstvwxyz]/)


    switch (true) {
        case regCheckGroupA.test(checkIndex):
            letter = "A"
            break;
        case regCheckGroupB.test(checkIndex):
            letter = "B"
            break;
        case regCheckGroupC.test(checkIndex):
            letter = "C"
            break;
        case regCheckGroupD.test(checkIndex):
            letter = "D"
            break;
        default:
            return letter;
    }
    return letter;

}


function isVowel(x) {

    return (/^[aeiou]$/i).test(x);

}
