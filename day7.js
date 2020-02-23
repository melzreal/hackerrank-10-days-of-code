
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /^([aeiou]).*\1$/gi;

    /*
     * Do not remove the return statement
     */
    return re;
}


function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */

    //we will check if the first 3 characters match any of the desired outcomes followed
    //by a dot

    const re = /(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.).*[a-zA-Z]$/
    /*
     * Do not remove the return statement
     */
    return re;
}

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */

    let re = new RegExp(/[0-9]+/gm)
    /*
     * Do not remove the return statement
     */
    return re;
}

