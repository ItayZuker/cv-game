class Freelance {
    constructor() {
        this.freelance = document.createElement('div')
        this.initFrame()
    }

    initFrame() {
        this.freelance.classList.add('current-frame')
        this.freelance.style.backgroundImage = 'url(mtrl/freelance.gif)'
    }
}