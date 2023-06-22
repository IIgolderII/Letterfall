document.querySelector(".horizontal_bar").addEventListener("click", function () {
    if (!document.querySelector("body").classList.contains("play"))
        start()
})

document.addEventListener("keypress", function (e) {
    if (e.key == " " && !document.querySelector("body").classList.contains("play"))
        start()

    parent = document.querySelector(".game")
    if (e.key == parent.firstChild.textContent) {
        document.querySelector(".game_score").innerHTML = parseInt(document.querySelector(".game_score").innerHTML) + 10 * (Math.ceil(Math.min(1, document.querySelector(".game").firstChild.dataset.top / 75) * 10) / 10)
        parent.removeChild(parent.firstChild)
    }
})

function start() {
    document.querySelector("body").classList.add("play")
    document.querySelector(".game").innerHTML += "<span class='letter' data-top='0' style='left:" + Math.round(Math.random() * 98) + "%;'>" + "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)] + "</span>"
    var speed = 0.2
    var new_letter_rate = 25

    var game = setInterval(function () {
        if (!document.querySelector(".game").lastChild || document.querySelector(".game").lastChild.dataset.top > new_letter_rate) {
            document.querySelector(".game").innerHTML += "<span class='letter' data-top='0' style='left:" + Math.round(Math.random() * 98) + "%;'>" + "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)] + "</span>"
        }

        let top_percentage = document.querySelector(".game").firstChild.dataset.top

        let effective_speed = (top_percentage > 75) ? speed * (100 - top_percentage) / 25 : speed;


        Array.from(document.querySelector(".game").children).forEach(letter => {
            letter.dataset.top = parseFloat(letter.dataset.top) + effective_speed
            letter.style.top = letter.dataset.top + "%"
        })
    }, 10)
}