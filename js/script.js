const mode = document.querySelector("#switch button")


function toggleMode() {
    const html = document.documentElement

    if (html.classList.contains("light")) {
        html.classList.remove("light")
    } else {
        html.classList.add("light")
    }
}


mode.addEventListener("click", () =>{
    toggleMode()
})
