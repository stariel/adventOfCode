let input = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`

let claimArray = input.split('\n');

var pattern = new Map;
function layout(claims) {
    for (let i = 0; i < claims.length; i++) {
        let parts = claims[i].split(' ');
        let start = parts[2].replace(':', '').split(',');
        let size = parts[3].split('x');
        let j = parseInt(start[0]);
        for (j = parseInt(start[0]); j < (parseInt(start[0])+parseInt(size[0])) ; j++) {
            for (let k = parseInt(start[1]); k < (parseInt(start[1])+ parseInt(size[1])); k++) {
                let coordinate = [j,k];
                let key = coordinate.toString();
                if (pattern.has(key)) {
                    let val = pattern.get(key);
                    pattern.set(key, (val += 1));
                }
                else {
                    pattern.set(key, 1);
                }
                
            }
            
        }
        
    }
    let values = Array.from(pattern.values());
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] > 1) {
            tally ++;
        }
    }
    console.log(tally);
    return pattern;

}



function checkClaim(claims) {
    var allClaims = layout(claimArray);
    for (let i = 0; i < claims.length; i++) {
        let thisClaim = new Map;
        let parts = claims[i].split(' ');
        let id = parts[0];
        let start = parts[2].replace(':', '').split(',');
        let size = parts[3].split('x');
        let j = parseInt(start[0]);
        for (j = parseInt(start[0]); j < (parseInt(start[0])+parseInt(size[0])) ; j++) {
            for (let k = parseInt(start[1]); k < (parseInt(start[1])+ parseInt(size[1])); k++) {
                let coordinate = [j,k];
                let key = coordinate.toString();
                if (thisClaim.has(key)) {
                    let val = thisClaim.get(key);
                    thisClaim.set(key, (val += 1));
                }
                else {
                    thisClaim.set(key, 1);
                }
}
        }
        let keyArr = Array.from(thisClaim.keys());
        for (let k = 0; k < keyArr.length; k++) {
            let overlaps = allClaims.get(keyArr[k]);
            console.log(overlaps);
            if (overlaps > 1) {
                k = keyArr.length;
            }
            else if (k == keyArr.length -1 && overlaps == 1) {
                    console.log('ID: ' + id);
                }
            }
        }
    };

checkClaim(claimArray);