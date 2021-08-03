//const { log } = require("console");
let fs = require("fs");
let path = require("path");

let inputArr = process.argv.slice(2);
//let newArr = inputArr;
// console.log(newArr);
let optionArr = [];
let filesArr = [];

for(let i = 0; i < inputArr.length; i++){
    

    let firstChar = inputArr[i].charAt(0);
    if(firstChar =="-"){
        optionArr.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }
}

for(let i = 0; i < filesArr.length; i++){
    let ans = fs.existsSync(filesArr[i]);
    if(ans == false){
        console.log("File Does Not Exist");
        return;
    }
}

let content = "";
for(let i = 0; i < filesArr.length; i++){
    content += fs.readFileSync(filesArr[i]) + "\r\n";
}
let contentArr = content.split("\r\n");


let isSPresent = optionArr.includes("-s");
let isNPresent = optionArr.includes("-n");
let isBPresent = optionArr.includes("-b");

//console.log(content);
//console.log(optionArr);

//************IMPLEMENTING ONLY -S***************
if(isSPresent == true && isNPresent == false && isBPresent == false){
    for(let i = 1; i < contentArr.length; i++){
    if(contentArr[i] =="" && contentArr[i-1] ==""){
        contentArr[i] = null;
    }else if(contentArr[i] =="" && contentArr[i-1] == null){
        contentArr[i] = null;
    }
 }
    let tempArr = [];
    for(let i = 0; i < contentArr.length - 1; i++){
        if(contentArr[i] !== null){
            tempArr.push(contentArr[i]);
        }
    }
  contentArr = tempArr;
console.log(contentArr.join("\n"));
} 
//console.log(contentArr);

//************IMPLEMENTING ONLY -N***************
if(isNPresent == true && isSPresent == false && isBPresent == false){
    for(let i = 0; i < contentArr.length - 1; i++){
        console.log(i+1 + " " + contentArr[i]);
    }
}


// **********IMPLEMENTING ONLY -B**********
if(isBPresent == true && isSPresent == false && isNPresent == false){
    let j = 1;
    for(let i = 0; i < contentArr.length - 1; i++){
        if(contentArr[i] ==""){
            contentArr[i] = null;
        }
    
        if(contentArr[i] == null){
            console.log();
        }else {
            console.log(j + " " + contentArr[i]);
            j++;
        }
    }
}

// **********IMPLEMENTING -S AND -N**********
if(isSPresent == true && isNPresent == true && isBPresent == false){
    // logic of -s
    for(let i = 1; i < contentArr.length; i++){
        if(contentArr[i] =="" && contentArr[i-1] ==""){
            contentArr[i] = null;
        }else if(contentArr[i] =="" && contentArr[i-1] == null){
            contentArr[i] = null;
        }
    }
    let tempArr = [];
    for(let i = 0; i < contentArr.length; i++){
        if(contentArr[i] !== null){
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr;
      // logic of -n
    
    let j = 1;
    for(let i = 0; i < contentArr.length - 1; i++){
        console.log(j + " " + contentArr[i]);
        j++;;
    }
} 

// *************IMMPLEMENTING  -S AND -B ****************
if(isSPresent == true && isNPresent == false && isBPresent == true){
    //implenting -s
    for(let i = 1; i < contentArr.length; i++){
        if(contentArr[i] =="" && contentArr[i-1] ==""){
            contentArr[i] = null;
        }else if(contentArr[i] =="" && contentArr[i-1] == null){
            contentArr[i] = null;
        }
     }
        let tempArr = [];
        for(let i = 0; i < contentArr.length - 1; i++){
            if(contentArr[i] !== null){
                tempArr.push(contentArr[i]);
            }
        }
      contentArr = tempArr;
    //console.log(contentArr.join("\n"));

    //implenting -b
    let j = 1;
        for(let i = 0; i < contentArr.length; i++){
            if(contentArr[i] ==""){
                contentArr[i] = null;
            }
    
           if(contentArr[i] == null){
            console.log();
           }else {
           console.log(j + " " + contentArr[i]);
           j++;
        }
     
     }
}

// *************IMMPLEMENTING  -N AND -B ****************
if(isNPresent == true && isSPresent == false && isBPresent == true){
    let j = 1;
    for(let i = 0; i < contentArr.length - 1; i++){
        console.log(j + " " + contentArr[i]);
        j++;
    }
}

// *************IMMPLEMENTING  -S , -N AND -B ****************
if(isSPresent == true && isNPresent == true && isBPresent == true){
   for(let i = 0; i < contentArr.length;i++){
       if(optionArr[i] == "-n"){   // if first input is -n then (-s and -n) will be executed
            // logic of -s
            for(let i = 1; i < contentArr.length; i++){
                if(contentArr[i] =="" && contentArr[i-1] ==""){
                    contentArr[i] = null;
                }else if(contentArr[i] =="" && contentArr[i-1] == null){
                    contentArr[i] = null;
                }
            }
            let tempArr = [];
            for(let i = 0; i < contentArr.length - 1; i++){
                if(contentArr[i] !== null){
                    tempArr.push(contentArr[i]);
                }
            }
            contentArr = tempArr;
            // logic of -n
            let j = 1;
            for(let i = 0; i < contentArr.length; i++){
                console.log(j + " " + contentArr[i]);
                j++;
            }
            break;
        }else if(optionArr[i] == "-b"){    // if first input is -b then (-s and -b) will be executed
            // logic of -s
            for(let i = 1; i < contentArr.length; i++){
                if(contentArr[i] =="" && contentArr[i-1] ==""){
                    contentArr[i] = null;
                }else if(contentArr[i] =="" && contentArr[i-1] == null){
                    contentArr[i] = null;
                }
            }
            let tempArr = [];
            for(let i = 0; i < contentArr.length ; i++){
                if(contentArr[i] !== null){
                    tempArr.push(contentArr[i]);
                }
            }
            contentArr = tempArr;
            // logic of -b
            let j = 1;
            for(let i = 0; i < contentArr.length - 1; i++){
                if(contentArr[i] ==""){
                    contentArr[i] = null;
                }
    
                if(contentArr[i] == null){
                    console.log();
                }else {
                    console.log(j + " " + contentArr[i]);
                    j++;
                }
            }
            break;
        }
      
    }
}