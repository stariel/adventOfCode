let input = `abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`

let labelArray = input.split('\n');
console.log(labelArray);

function scan(labels) {
    let charDuo = 0;
    let charTrio = 0;
    for (let i = 0; i < labelArray.length; i++) {
        let charCount = new Map;
        for (let char of labelArray[i]) {
            if (charCount.has(char)) {
                let current = charCount.get(char)
                charCount.set(char, (current += 1));
            }
            else {
                charCount.set(char, 1);
            }
        }
        console.log(charCount);
        
    }

}

scan(labelArray);