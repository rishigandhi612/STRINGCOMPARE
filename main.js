// Function to compare l1 and l2
function compareStrings(l1, l2){
   
    // This condition will return true only if l1 and l2 hold true from equality
    if(l1 == l2){
        return 'Both strings are equal';
    }
    
    return 'Both strings are not equal';
}

const str1 = 'Javascript';
const str2 = 'JavaScript';
const str3 = 'Javascript';
const str4 = 'Typescript'

//Expected output: Both strings are equal
console.log(compareStrings(str1.toUpperCase(), str2.toUpperCase()));

//Expected output: Both strings are equal
console.log(compareStrings(str1.toLowerCase(), str3.toLowerCase()));

//Expected output: Both strings are not equal
console.log(compareStrings(str1.toUpperCase(), str4.toUpperCase()));