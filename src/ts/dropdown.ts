const userBtn = document.getElementById("userIcon") as HTMLButtonElement | null
const userDropdown = document.getElementById("userDropdown") as HTMLDivElement | null

if (userBtn && userDropdown) {
  userBtn.addEventListener("click", (event: MouseEvent) => {
    event.stopPropagation()
    userDropdown.classList.toggle("is-active")
  })

  userDropdown.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (target.closest("a")) {
      userDropdown.classList.remove("is-active")
    } else {
      event.stopPropagation()
    }
  })

  window.addEventListener("click", () => {
    if (userDropdown.classList.contains("is-active")) {
      userDropdown.classList.remove("is-active")
    }
  })

  window.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      userDropdown.classList.remove("is-active")
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  const moreMenu = document.getElementById("moreMenu") as HTMLElement
  const moreLink = document.querySelector(".more-link") as HTMLElement

  if (moreMenu && moreLink) {
    moreLink.addEventListener("click", (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()

      moreMenu.classList.toggle("is-active")
    })

    document.addEventListener("click", (e: MouseEvent) => {
      const target = e.target as Node
      if (!moreMenu.contains(target)) {
        moreMenu.classList.remove("is-active")
      }
    })
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        moreMenu.classList.remove("is-active")
      }
    })
  }
})
