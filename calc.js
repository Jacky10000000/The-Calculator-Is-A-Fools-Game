function start() {
    let One = prompt("Num1");
    let op =  prompt("GIB EQUATION NOW! + - / *");
    let Two = prompt("Num2");
    One = parseFloat(One);
    Two = parseFloat(Two);

    if(op == "+") {
        // Addition
        alert(One + Two);
    } else if (op == "-") {
        alert(One - Two);
    } else if (op == "/") {
        alert(One / Two);
    } else if (op == "*") {
        alert(One * Two);
    } else {
        alert("What The Fuck Operator is that? Try again Dawg  Refresh");
    }
}

start()