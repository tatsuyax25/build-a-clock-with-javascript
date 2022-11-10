setInterval(setClock, 1000)

function setClock() {
    const currentDate = new Date()
    const secondsRation = currentDate.getSeconds() / 60
    const minutesRation = currentDate.getMinutes() / 60
    const hoursRation = currentDate.getHours() / 60
}