declare function toggleTheme(isDark: boolean): void

const sidebarThemeCheck = document.getElementById("themeCheckbox") as HTMLInputElement

sidebarThemeCheck?.addEventListener("change", () => {
  const isDark = sidebarThemeCheck.checked

  if (typeof toggleTheme === "function") {
    toggleTheme(isDark)
  } else {
    const newTheme = isDark ? "dark" : "light"
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }
})

const syncSidebarSettings = () => {
  const savedTheme = localStorage.getItem("theme") || "light"
  if (sidebarThemeCheck) {
    sidebarThemeCheck.checked = savedTheme === "dark"
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", syncSidebarSettings)
} else {
  syncSidebarSettings()
}
