import { gearItems } from "../constants/gear-items"

export default function Gear() {
  return (
    <div className="overflow-x-auto bg-base-100 text-base-content">
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-5 mb-3">gear</h1>
        <p className="mb-5">A table of everything that I currently use day-to-day working in tech...<sup>1</sup>...</p>
      </div>
      <div className="max-w-3xl mx-auto">
        <table className="table">
          <thead>
            <tr>
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
        <div className="text-left mt-10 mb-15">
          <p className="mb-3"><sup>1</sup>Disclaimer: Yes, I do <strong>love</strong> Logitech. Their bluetooth 
          functionality for switching between devices (specifically on keyboards) is 
          second to none. That being said my opinions are all my own and I'm not (sadly)
          sponsored by Logitech (maybe one day 🤞🏽).</p>
        </div>
      </div>
    </div>
  )
}