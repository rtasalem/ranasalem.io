// 'use client'

// import { useEffect, useState } from 'react'
// import { themeChange } from 'theme-change'
// import { renderThemeIcon } from './render-theme-icon'
// import { themes } from '../../../constants/themes'

// export function ThemeToggle() {
//   const [theme, setTheme] = useState('light')

//   useEffect(() => {
//     themeChange(false)
//   }, [])

//   function handleThemeChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const selectedTheme = event.target.value
//     setTheme(selectedTheme)
//     document.documentElement.setAttribute('data-theme', selectedTheme)
//   }

//   return (
//     <div className='dropdown dropdown-end font-mono'>
//       <button tabIndex={0} className='btn btn-ghost m-1'>
//         {renderThemeIcon(theme)}
//       </button>
//       <ul className='dropdown-content bg-base-300 rounded-box z-10 w-28 p-2 shadow-2xl'>
//         {themes.map((value) => (
//           <li key={value}>
//             <input
//               type='radio'
//               name='theme-dropdown'
//               className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
//               aria-label={value}
//               value={value}
//               onChange={handleThemeChange}
//               checked={theme === value}
//               data-set-theme={value}
//               data-act-class='ACTIVECLASS'
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

'use client'

import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
import { renderThemeIcon } from './render-theme-icon'
import { themes } from '../../../constants/themes'

export function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    themeChange(false)
    
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light'
    setTheme(currentTheme)
    
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute('data-theme') || 'light'
      setTheme(newTheme)
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    
    return () => observer.disconnect()
  }, [])

  return (
    <div className='dropdown dropdown-end font-mono'>
      <button tabIndex={0} className='btn btn-ghost m-1'>
        {renderThemeIcon(theme)}
      </button>
      <ul className='dropdown-content bg-base-300 rounded-box z-10 w-28 p-2 shadow-2xl'>
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
