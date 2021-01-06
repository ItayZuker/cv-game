new class Main {
    constructor() {
        this.canMan = new CanMan()
        this.welcome = new Welcome()
        this.vildehaye = new VildeHaye()
        this.freelance = new Freelance()
        this.currentFrame
        this.moving = false
        this.direction = 'right'
        this.backgroundPicPosition = 0
        this.interval
        this.mainContainer = document.createElement('main')
        this.background = document.createElement('div')
        this.init()
    }
    init() {
        this.mainContainer.classList.add('main-container')
        this.background.classList.add('background')
        this.background.style.backgroundImage = 'url(mtrl/backgroud.png)'
        this.mainContainer.appendChild(this.background)
        document.body.appendChild(this.mainContainer)
        this.mainContainer.appendChild(this.canMan.canManContainer)
        this.setFrame()

        document.addEventListener("keydown", e => {
            if (e.key === 'ArrowDown') {
                this.moving = false
                this.canMan.stop(this.direction)
                clearInterval(this.interval)
            }
            if (e.key ==='ArrowUp') {
                this.canMan.jump(this.moving, this.direction)
            }
            if (e.key === 'ArrowRight') {
                clearInterval(this.interval)
                this.moveRigth()
            }
            if (e.key === 'ArrowLeft') {
                clearInterval(this.interval)
                this.moveLeft()
            }  
        });
    }

    moveRigth() {
        clearInterval(this.interval)
        if (this.direction === 'right') {
            this.moving = true
            this.canMan.goRight(this.direction)
            this.interval = setInterval(() => {
                this.backgroundPicPosition -= 20
                this.background.style.left = `${this.backgroundPicPosition}px`
                this.setFrame()
            }, 100)
        } else {
            this.canMan.goRight(this.direction)
            this.direction = 'right'
            clearInterval(this.interval)
        }
    }

    moveLeft() {
        clearInterval(this.interval)
        if (this.direction === 'left') {
            this.moving = true
            this.canMan.goLeft(this.direction, this.backgroundPicPosition)
            this.interval = setInterval(() => {
                if (this.backgroundPicPosition === 0)  return
                this.backgroundPicPosition += 20
                this.background.style.left = `${this.backgroundPicPosition}px`
                this.setFrame()
            }, 100)
        } else {
            this.canMan.goLeft(this.direction, this.backgroundPicPosition)
            this.direction = 'left'
            clearInterval(this.interval)
        }
    }

    setFrame() {
        console.log(this.backgroundPicPosition)
        if (this.backgroundPicPosition === 0) {
            this.currentFrame = this.welcome.welcome
            this.playFrame()
        } 
        if (this.backgroundPicPosition === -800) {
            this.currentFrame = this.vildehaye.vildehaye
            this.playFrame()
        }
        if (this.backgroundPicPosition === -1600) {
            this.currentFrame = this.freelance.freelance
            // ---> insert tik tak tok game /////////////////////////////////
            this.playFrame()
        }
        if (this.backgroundPicPosition === -2400) {
            this.currentFrame = this.vildehaye.vildehaye
            this.playFrame()
        }
        if (this.backgroundPicPosition === -3200) {
            this.currentFrame = this.vildehaye.vildehaye
            this.playFrame()
        }
        if (this.backgroundPicPosition === -100 ||
            this.backgroundPicPosition === -700 ||
            this.backgroundPicPosition === -900 ||
            this.backgroundPicPosition === -1500 ||
            this.backgroundPicPosition === -1700 ||
            this.backgroundPicPosition === -2300 ||
            this.backgroundPicPosition === -2500 ||
            this.backgroundPicPosition === -3100 ||
            this.backgroundPicPosition === -3300) {
            this.removeFrame()
        }

    }

    playFrame() {
        this.canMan.stop(this.direction)
        clearInterval(this.interval)
        this.moving = false
        setTimeout(() => {
            this.mainContainer.appendChild(this.currentFrame)
        }, 100)
        setTimeout(() => {
            this.currentFrame.classList.add('appear')
        }, 200)
    }

    removeFrame() {
        setTimeout(() => {
            this.currentFrame.classList.remove('appear')
        }, 100)    
        setTimeout(() => {
            this.currentFrame.remove()
        }, 500)
    }
}