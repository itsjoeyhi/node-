const reverse = (string) => {
    let letters = [];
    let reversed = [];

 for (let i in string) {
     letters.push(string[i])
 }
 for (let j = letters.length; j >=0; j--) {
     reversed.push(letters[j]);
 }
 return reversed.join(" ");
}
