import "../scss/main.scss"
import "./language"
import "./burger"
import "./dropdown"

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".list-wrapper") as NodeListOf<HTMLElement>
  const isMediaQuery = window.matchMedia("(max-width: 1053px)")

  sliders.forEach((slider) => {
    let isDown = false
    let startX: number
    let scrollLeft: number

    const startAction = (e: MouseEvent | TouchEvent) => {
      if (!isMediaQuery.matches) return
      isDown = true
      slider.classList.add("active")
      const pageX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX
      startX = pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft

      if (e instanceof MouseEvent) {
        slider.style.cursor = "grabbing"
      }
    }

    const stopAction = () => {
      isDown = false
      slider.classList.remove("active")
      slider.style.cursor = "grab"
    }

    const moveAction = (e: MouseEvent | TouchEvent) => {
      if (!isDown || !isMediaQuery.matches) return
      const pageX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX
      const x = pageX - slider.offsetLeft
      const walk = (x - startX) * 2
      slider.scrollLeft = scrollLeft - walk
    }

    slider.addEventListener("mousedown", startAction)
    window.addEventListener("mouseup", stopAction)
    window.addEventListener("mousemove", moveAction)

    slider.addEventListener("touchstart", startAction, { passive: true })
    slider.addEventListener("touchend", stopAction)
    slider.addEventListener("touchmove", moveAction, { passive: true })
  })
})
