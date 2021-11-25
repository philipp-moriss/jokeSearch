let Value = "print"
let input = document.getElementsByClassName("Input")[0]
let button = document.getElementsByClassName("Button")[0]
let div = document.getElementsByClassName("Form")[0]
let prelouder = document.createElement("img")
prelouder.src = "./preloader/spiner.gif"
prelouder.style.height = "30px"
prelouder.style.width = "30px"
prelouder.className = "prelouder"
input.placeholder = "inter text"


function Search() {
    const utterance = new SpeechSynthesisUtterance("подождите немного пока я наберу текст и найду ответ в гугле хе хе хе");
    window.speechSynthesis.speak(utterance);
    console.log(window.speechSynthesis.speaking.valueOf())
    input.disabled = "disabled"
    button.disabled = "disabled"
    div.before(prelouder)
    let ArrayValue = Value.split("")
    input.value = ""
    let i = 0
    let id = setInterval(() => {
        if (ArrayValue[i] !== undefined) {
            input.value = input.value + ArrayValue[i]
            console.log(input.value)
            i += 1
        } else {
            clearInterval(id)
            window.location.href = `https://www.google.com/search?q=${input.value}`
            input.value = ""
        }

    }, 1000)
}

input.addEventListener("change", () => Value = input.value)

input.onkeypress = (e) => {
    if (e.code === "Enter") {
        Value = input.value
        Search()
    }
}

button.addEventListener("click", Search)