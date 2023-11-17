function generateTables() {

    const number = parseInt(document.getElementById("inputNumber").value); 
    let tableForLoop = "";
    let tableWhileLoop = ""; let tableDoWhileLoop = "";

    for (let i = 1; i <= 10; i++) { const result = number * i;
    tableForLoop += `${number} x ${i} = ${result}<br>`;
    }

    let i = 1;
    while (i <= 10) {
        const result = number * i;
        tableWhileLoop += `${number} x ${i} = ${result}<br>`; i++;
    }

    i = 1;
    do {
        const result = number * i;
        tableDoWhileLoop += `${number} x ${i} = ${result}<br>`; i++;
    } while (i <= 10);

    document.getElementById("tableForLoop").innerHTML = tableForLoop; 
    document.getElementById("tableWhileLoop").innerHTML = tableWhileLoop; 
    document.getElementById("tableDoWhileLoop").innerHTML = tableDoWhileLoop;
}
    