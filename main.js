function reverseWord(string) {
    let splitWord = string.split("")
    let reverseString = splitWord.reverse();
    let joinReverseString = reverseString.join("");
    return joinREverseString
}


window.addEventListener(`load`, () => {
    const button = document.getElementById("reverse-button");
    button.addEventListener(`click`, () => {
        const input = do.getElementById("InputUser");
        const reverse = reverseWord(input.value)
        const showResult = document.getElementById("result");
        showResult.innerHTML = `il contrario di ${input.value} è ${reverse}`
    })
})




