class VildeHaye {
    constructor() {
        this.vildehaye = document.createElement('div')
        this.initFrame()
    }

    initFrame() {
        this.vildehaye.classList.add('current-frame')
        this.vildehaye.style.backgroundImage = 'url(mtrl/vildehaye.gif)'
    }
}