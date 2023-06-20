document.querySelector(".horizontal_bar").addEventListener("click", function () {
    if (document.querySelector(".horizontal_bar").classList.contains("start") && document.querySelector(".horizontal_bar").classList.contains("start"))
        start()
})

document.addEventListener("keypress", function (e) {
    if (e.key == " " && document.querySelector(".horizontal_bar").classList.contains("start"))
        start()
})

function start() {
    document.querySelector(".horizontal_bar").classList.remove("start")
    var delay = 1000
    var speed = 0.2

    var game = setInterval(function () {
        document.querySelector(".game").innerHTML += "<span class='letter' data-top='0' style='left:" + Math.round(Math.random() * 98) + "%;'>" + "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)] + "</span>"
    }, delay)

    var down = setInterval(function () {
        Array.from(document.querySelector(".game").children).forEach(letter => {
            letter.dataset.top = parseFloat(letter.dataset.top) + speed
            letter.style.top = letter.dataset.top + "%"
        })
    }, 10)
}