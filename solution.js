function happyLadybugs(b) {
    //solution
    let underscore = false;
    let caseLetter = true;
    
    for(let i = 0; i < b.length; i++){
        if(b.charAt(i) === '_'){underscore = true;}
    
        else if(b.indexOf(b.charAt(i)) === i){
            let counter = 0;
            let g = i + 1;
            let k = i;
            while( g !== 0){
                g = b.indexOf(b.charAt(i), g);
                if(g-k > 1){caseLetter = false;}
                k = g;
                counter++
                g++
            }
            if(counter === 1){
                return "NO";
            }
        }
    }
    return (underscore || caseLetter) ? `YES` : `NO`;
    
    }