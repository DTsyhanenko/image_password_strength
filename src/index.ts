const password = document.getElementById('password') as HTMLInputElement

const background = document.getElementById('background') as HTMLDivElement

password?.addEventListener('input', (e) => {
    const input = e.target?.value
    // const input = e.target as HTMLInputElement
    // input.value
    const length: number = input.length
    const blurValue: number = 20 - length * 2
    if (background != undefined) {
        background.style.filter = `blur(${blurValue}px)`
    }
})