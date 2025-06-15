import { gearItems } from "../constants/gear-items"

export default function Gear() {
  return (
    <div className="overflow-x-auto bg-base-100 text-base-content">
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-5 mb-3">Gear</h1>
        <p className="mb-5">A list of everything that I currently use as a software developer...</p>
      </div>
      <div className="max-w-3xl mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Description</th>
              <th>Price (GBP)</th>
            </tr>
          </thead>
          <tbody>
            {gearItems.map(({ icon, item, description, url }) => (
              <tr key={item}>
                <th>{icon}</th>
                <td>{item}</td>
                <td>{description}</td>
                <td>{url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}