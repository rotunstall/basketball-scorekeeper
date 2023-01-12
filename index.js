let saveElH = document.getElementById("save-el-h")
let saveElG = document.getElementById("save-el-g")
let hCountEl = document.getElementById("h-count-el")
let gCountEl = document.getElementById("g-count-el")
// let hPlus2Bbtn = document.getElementById("h-plus2-btn")
// let hPlus3Btn = document.getElementById("h-plus3-btn")
// let gPlus1Btn = document.getElementById("g-plus1-btn")
// let gPlus2Bbtn = document.getElementById("g-plus2-btn")
// let gPlus3Btn = document.getElementById("g-plus3-btn")
let hCount = 0
let gCount = 0

function incrementH1() {
       hCount += 1
       hCountEl.textContent = hCount 
    } 
    
function incrementH2() {
       hCount += 2
       hCountEl.textContent = hCount 
    }
    
function incrementH3() {
       hCount += 3
       hCountEl.textContent = hCount 
    }
    
function decrementH() {
       hCount ? hCount -= 1 : hCount += 0
       hCountEl.textContent = hCount 
    } 
    
function incrementG1() {
       gCount += 1
       gCountEl.textContent = gCount 
    }
    
function incrementG2() {
       gCount += 2
       gCountEl.textContent = gCount 
    } 
    
function incrementG3() {
       gCount += 3
       gCountEl.textContent = gCount 
    }
    
function decrementG() {
       gCount ? gCount -= 1 : gCount += 0
       gCountEl.textContent = gCount 
    }
    


function saveH() {
    let countStr = hCount + " - "
    saveElH.textContent += countStr
    // hCountEl.textContent = 0
    // hCount = 0
}

function saveG() {
    let countStr = gCount + " - "
    saveElG.textContent += countStr
    // gCountEl.textContent = 0
    // gCount = 0
}

function resetH() {
    hCountEl.textContent = 0
    hCount = 0
}
function resetG() {
    gCountEl.textContent = 0
    gCount = 0
}
