function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function cleanDisplay() {
    document.getElementById("display").value = '';
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function getDateTime() {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString('pt-BR');
    const time = currentDate.toLocaleTimeString('pt-BR');
    return `${date} ${time}`
}

function addHistoryDisplay() {
    document.getElementById("dateTimeDisplay5").value = document.getElementById("dateTimeDisplay4").value
    document.getElementById("historyDisplay5").value = document.getElementById("historyDisplay4").value

    document.getElementById("dateTimeDisplay4").value = document.getElementById("dateTimeDisplay3").value
    document.getElementById("historyDisplay4").value = document.getElementById("historyDisplay3").value

    document.getElementById("dateTimeDisplay3").value = document.getElementById("dateTimeDisplay2").value
    document.getElementById("historyDisplay3").value = document.getElementById("historyDisplay2").value

    document.getElementById("dateTimeDisplay2").value = document.getElementById("dateTimeDisplay1").value
    document.getElementById("historyDisplay2").value = document.getElementById("historyDisplay1").value

    document.getElementById("dateTimeDisplay1").value = getDateTime()
    document.getElementById("historyDisplay1").value = document.getElementById("display").value
}