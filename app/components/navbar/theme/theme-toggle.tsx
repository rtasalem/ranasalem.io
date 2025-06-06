"use client"

import { useState } from "react"
import { renderThemeIcon } from "./render-theme-icon"

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
  </svg>
)

export function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  function handleThemeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedTheme = event.target.value
    setTheme(selectedTheme)
    document.documentElement.setAttribute("data-theme", selectedTheme)
  }

  const themes = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "black" },
    { label: "Frog", value: "frog" },
  ]

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost m-1">
        {renderThemeIcon(theme)}
      </div>
      <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-10 w-40 p-2 shadow-2xl">
        {themes.map(({ label, value }) => (
          <li key={value}>
            <label className="flex items-center gap-2 w-full btn btn-sm btn-block btn-ghost justify-start cursor-pointer">
              <input
                type="radio"
                name="theme-dropdown"
                className="hidden"
                aria-label={label}
                value={value}
                onChange={handleThemeChange}
                checked={theme === value}
              />
              <span>{label}</span>
              {theme === value && <CheckIcon />}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
