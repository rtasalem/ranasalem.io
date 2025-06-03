"use client"

import { useState } from "react"
import { renderThemeIcon } from "./render-theme-icon"

export function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  function handleThemeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedTheme = event.target.value
    setTheme(selectedTheme)
    document.documentElement.setAttribute("data-theme", selectedTheme)
  }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost m-1">
        {renderThemeIcon(theme)}
      </div>
      <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-10 w-30 p-2 shadow-2xl">
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Light Mode"
            value="light"
            onChange={handleThemeChange}
            checked={theme === "light"}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Dark Mode"
            value="black"
            onChange={handleThemeChange}
            checked={theme === "black"}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Rana's Mode"
            value="rana"
            onChange={handleThemeChange}
            checked={theme === "rana"}
          />
        </li>
      </ul>
    </div>
  )
}