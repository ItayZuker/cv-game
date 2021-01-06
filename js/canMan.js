class CanMan {
    constructor() {
        this.canManPicPosition = 3600
        this.interval
        this.canManContainer = document.createElement('div')
        this.canMan = document.createElement('div')
        this.initCanMan()
    }

    initCanMan() {
        this.canManContainer.classList.add('can-man-container')
        this.canMan.classList.add('can-man')
        this.canMan.style.backgroundImage = 'url(mtrl/canManWalking.png)'
        this.canManContainer.appendChild(this.canMan)
        this.stop()
    }

    jump(moving, direction) {
        clearInterval(this.interval)
        this.canMan.style.backgroundImage = 'url(mtrl/canManJump.png)'
            if (direction === 'right') {
                this.canManPicPosition = 0
                this.canMan.style.right = `${this.canManPicPosition}px`
                this.interval = setInterval(() => {
                    if (this.canManPicPosition === 2400) {
                        moving ? this.goRight(direction) : this.stop(direction)
                    } else {
                        this.canManPicPosition += 400
                    }
                    this.canMan.style.right = `${this.canManPicPosition}px`
                }, 110)
            } else {
                this.canManPicPosition = 3200
                this.canMan.style.right = `${this.canManPicPosition}px`
                this.interval = setInterval(() => {

                    if (this.canManPicPosition === 800) {
                        moving ? this.goLeft(direction) : this.stop(direction)
                    } else {
                        this.canManPicPosition -= 400
                    }
                    this.canMan.style.right = `${this.canManPicPosition}px`
                }, 110)
            }
        }

    stop(direction) {
        this.canMan.style.backgroundImage = 'url(mtrl/canManWalking.png)'
        clearInterval(this.interval)
        if (direction === 'left') {
            this.canManPicPosition = 0
            this.canMan.style.right = `${this.canManPicPosition}px`
        } else {
            this.canManPicPosition = 3200
            this.canMan.style.right = `${this.canManPicPosition}px`
        }
    }

    goRight(direction) {
        clearInterval(this.interval)
        this.canMan.style.backgroundImage = 'url(mtrl/canManWalking.png)'
        this.canMan.classList.remove('left')
        this.canManPicPosition = 800
            this.interval = setInterval(() => {
                if (direction === 'right') {
                    this.canManPicPosition === 2800 ? this.canManPicPosition = 0 : this.canManPicPosition += 400
                    this.canMan.style.right = `${this.canManPicPosition}px`
                } else {
                    clearInterval(this.interval)
                    this.stop('right')
                }
            }, 110)
    }

    goLeft(direction, backgroundPicPosition) {
        clearInterval(this.interval)
        this.canMan.style.backgroundImage = 'url(mtrl/canManWalking.png)'
        this.canMan.classList.add('left')
        this.canManPicPosition = 800
        this.interval = setInterval(() => {
            if (direction === 'left') {
                if (backgroundPicPosition === 0) return
                this.canManPicPosition === 400 ? this.canManPicPosition = 3200 : this.canManPicPosition -= 400
                this.canMan.style.right = `${this.canManPicPosition}px`
            } else {
                this.stop('left')
            }
        }, 110)
    }
}