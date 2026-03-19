const burgerBtn = document.getElementById("burgerBtn")
const sidebar = document.getElementById("sidebar")
const closeBtn = document.getElementById("closeSidebar")

const toggleSidebar = (state?: boolean): void => {
  if (!sidebar) return
  const isOpen = state ?? !sidebar.classList.contains("is-open")
  sidebar.classList.toggle("is-open", isOpen)
  document.body.style.overflow = isOpen ? "hidden" : ""
}

burgerBtn?.addEventListener("click", (e) => {
  e.stopPropagation()
  toggleSidebar()
})

closeBtn?.addEventListener("click", () => toggleSidebar(false))

document.addEventListener("click", (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (sidebar?.classList.contains("is-open") && !sidebar.contains(target) && !burgerBtn?.contains(target)) {
    toggleSidebar(false)
  }
})
