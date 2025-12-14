'use client'

import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
import { renderThemeIcon } from './render-theme-icon'
import { themes } from '../../../constants/themes'

export function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    themeChange(false)

    const savedTheme = localStorage.getItem("theme") || "light"
    document.documentElement.setAttribute("data-theme", savedTheme)
    setTheme(savedTheme)

    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute("data-theme") || "light"
      setTheme(newTheme)
      localStorage.setItem("theme", newTheme)
    })

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })

    return () => observer.disconnect()
  }, [])

  return (
    <div className='dropdown dropdown-end font-mono'>
      <button tabIndex={0} className='border-b border-transparent hover:border-base-300 pb-0.5 m-1'>
        {renderThemeIcon(theme)}
      </button>
      <ul className='dropdown-content bg-base-300 rounded-box z-10 w-25 p-2 shadow-2xl'>
        {themes.map((value) => (
          <li key={value}>
            <input
              type='radio'
              name='theme-dropdown'
              className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
              aria-label={value}
              value={value}
              data-set-theme={value}
              data-act-class='ACTIVECLASS'
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
