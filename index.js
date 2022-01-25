function reverse(str) {

    
    splitStrList = str.split(" "); //splits the string into invidual array value if space exist

    reverseStr = '';

    for (let a = 0; a < splitStrList.length; a++) { //for loops that 
        let temp = ''
        let word = splitStrList[a].split('') //defines the meaning of a word (if there exist a space in the string)
        for (let b = word.length -1; b >= 0; b--){ //
            temp += word[b]
        }
        reverseStr += temp + ' '; //concatenates the reversed words with the spaces 
    }
    console.log(reverseStr) //prints out reversed string 
}

reverse('This is a test ') //Test function 


//Collabarative Group work code (team 3)