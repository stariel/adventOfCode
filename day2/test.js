let input = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`

let labelArray = input.split('\n');

function match(labels) {
    for (let i = 0; i < labels.length; i++) {
        let id1 = labels[i];
        for (let j = i+1; j < labels.length; j++) {
            let id2 = labels[j];
            let diff = 0;
            for (let char = 0; char < id1.length; char++) {
                if (id1[char] !== id2[char]) {
                    diff += 1;
                    if (diff > 1) {
                        char = 5;
                    }
                }
            }
            if (diff === 1) {
                let matchArr = [];
                let id1Arr = id1.split('');
                let id2Arr = id2.split('');
                for (let i = 0; i < id1.length; i++) {
                    if (id1Arr[i] === id2Arr[i]) {
                        matchArr.push(id1Arr[i]);
                    }
                    
                }
                console.log(matchArr.toString());
            }
            }
        }
    
    }

match(labelArray);