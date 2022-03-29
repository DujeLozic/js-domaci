function palindromTest(text) {
    let length = text.length - 1;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[length]) {
            length--;
        }
        else {
            return console.log(`${text} is NOT a palindrom.`)
        }
    }

    console.log(`${text} is a palindrom.`)
}

const text = palindromTest("smart trams");