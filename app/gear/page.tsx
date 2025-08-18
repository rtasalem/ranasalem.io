import { gearItems } from '../constants/gear-items'

export default function Gear() {
  return (
    <div className='overflow-auto mx-auto max-w-5xl space-y-5'>
      <h1 className='text-3xl text-center font-mono mt-5'>Gear</h1>
      <p className='text-center'>A table of everything that I currently use day-to-day working in tech<sup>1</sup>...</p>
      <table className='table'>
        <thead>
          <tr className='font-mono'>
            <th></th>
            <th>Item</th>
            <th>Specs</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {gearItems.map(({ icon, item, specs, description }) => (
            <tr key={item}>
              <th>{icon}</th>
              <td>{item}</td>
              <td>{specs}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='text-left text-xs'>
        <sup>1</sup>Disclaimer: Yes, I do <strong>love</strong> Logitech. Their bluetooth
        functionality for switching between devices (specifically on keyboards) is
        second to none. That being said my opinions are all my own and I'm not (sadly)
        sponsored by Logitech (maybe one day 🤞🏽).
      </p>
    </div>
  )
}
