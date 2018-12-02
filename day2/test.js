let input = `abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`

let labelArray = input.split('\n');

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
        let values = Array.from(charCount.values());
        if (values.includes(2)) {
            charDuo +=1
        }
        if (values.includes(3)) {
            charTrio += 1;
        }
        
    }
    console.log(charDuo*charTrio);

}

scan(labelArray);