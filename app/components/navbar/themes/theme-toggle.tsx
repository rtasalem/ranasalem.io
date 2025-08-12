"use client"

import { useState } from "react"
import { renderThemeIcon } from "./render-theme-icon"
import { themes } from "../../../constants/themes"

export function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  function handleThemeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedTheme = event.target.value
    setTheme(selectedTheme)
    document.documentElement.setAttribute("data-theme", selectedTheme)
  }

  return (
    <div className="dropdown dropdown-end font-mono">
      <button tabIndex={0} className="btn btn-ghost m-1">
        {renderThemeIcon(theme)}
      </button>
      <ul className="dropdown-content bg-base-300 rounded-box z-10 w-28 p-2 shadow-2xl">
        {themes.map((value ) => (
          <li key={value}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={value}
              value={value}
              onChange={handleThemeChange}
              checked={theme === value}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
