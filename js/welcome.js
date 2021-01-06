class Welcome {
    constructor() {
        this.welcome = document.createElement('div')
        this.initFrame()
    }

    initFrame() {
        this.welcome.classList.add('current-frame')
        this.welcome.style.backgroundImage = 'url(mtrl/welcome.gif)'
    }
}
