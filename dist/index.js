"use strict";
const password = document.getElementById('password');
const background = document.getElementById('background');
password === null || password === void 0 ? void 0 : password.addEventListener('input', (e) => {
    var _a;
    const input = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;
    // const input = e.target as HTMLInputElement
    // input.value
    const length = input.length;
    const blurValue = 20 - length * 2;
    if (background != undefined) {
        background.style.filter = `blur(${blurValue}px)`;
    }
});
//# sourceMappingURL=index.js.map