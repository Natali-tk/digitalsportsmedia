import { translations } from "./translations"

const langButtons = document.querySelectorAll(".lang__switcher-btn")
const translateElements = document.querySelectorAll("[data-i18n]")

function changeLanguage(lang: "ua" | "ru") {
  translateElements.forEach((el) => {
    const key = el.getAttribute("data-i18n") as keyof (typeof translations)["ua"]

    if (key && translations[lang][key]) {
      el.textContent = translations[lang][key]
    }
  })

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang)
  })

  localStorage.setItem("preferred-lang", lang)
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang") as "ua" | "ru"
    changeLanguage(lang)
  })
})

const savedLang = (localStorage.getItem("preferred-lang") as "ua" | "ru") || "ua"
changeLanguage(savedLang)
