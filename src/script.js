function history() {
    return document.getElementById("history-value").innerText;
}

function outputhistory(num) {
    document.getElementById("history-value").innerText=num;
}

function output() {
    return document.getElementById("output-value").innerText;
}

function outputshow(num) {
    if(num=="") {
        document.getElementById("output-value").innerText=num;
    } else {
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }         
} 
