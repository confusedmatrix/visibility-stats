export class VisibilityStats {
    constructor(selector) {
        this.elements = [...document.querySelectorAll(selector)].map(el => {
            const visible = this._isVisible(el, window.scrollY, window.innerHeight)
            return {
                element: el, 
                visibleNow: visible,
                lastSeen: visible ? Date.now() : null,
                timeOnScreen: 0,
            }
        })
        this._monitor()
    }

    getVisibleElements() {
        return this.elements.filter(el => el.visibleNow)
    }

    getStats() {
        return this.elements
    }

    _isVisible(element, winScrollY, winHeight) {
        const bounds = element.getBoundingClientRect()
        return bounds.y < winHeight && bounds.y + bounds.height > 0
    }

    _monitor() {
        const winScrollY = window.scrollY
        const winHeight = window.innerHeight

        window.requestAnimationFrame(() => {
            this.elements = this.elements.map(el => {
                const visible = this._isVisible(el.element, window.scrollY, window.innerHeight)
                return {
                    ...el,
                    visibleNow: visible,
                    lastSeen: visible ? Date.now() : null,
                    timeOnScreen: el.timeOnScreen + Date.now() - (el.lastSeen || Date.now()),
                }
            })
            this._monitor()
        });
    }
}

export default VisibilityStats