let input = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`

let claimArray = input.split('\n');

function layout(claims) {
    console.log(claims);
    let pattern = new Map;
    for (let i = 0; i < claims.length; i++) {
        let parts = claims[i].split(' ');
        let start = parts[2].replace(':', '').split(',');
        let size = parts[3].split('x');
        console.log(start);
        console.log(size);
        
    }

}

layout(claimArray);