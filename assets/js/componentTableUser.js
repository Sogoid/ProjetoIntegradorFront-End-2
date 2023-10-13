function addsDataToTable() {
    let table = document.getElementById("myTabela");
    let dadosTable = JSON.parse(localStorage.getItem('register'));

    for (let obj of dadosTable) {
        let newLine = table.insertRow();
        for (let key in obj) {
            let newCell = newLine.insertCell();
            // Se obj[key] estiver definido, use-o, caso contrário, use uma string vazia
            newCell.innerText = obj[key] || '';
        }
    }
}

$(function () {
    addsDataToTable()
});