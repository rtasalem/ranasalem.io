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
              <th>Description</th>
              <th>Price (GBP)</th>
              <th>Amazon<sup>2</sup></th>
            </tr>
          </thead>
          <tbody>
            {gearItems.map(({ icon, item, description, price, url }) => (
              <tr key={item}>
                <th>{icon}</th>
                <td>{item}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>{url}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-left mt-10 mb-15">
          <p className="mb-3"><sup>1</sup>Disclaimer: Yes, I do <strong>love</strong> Logitech. Their bluetooth 
          functionality for switching between devices (specifically on keyboards) is 
          second to none. That being said my opinions are all my own and I'm not (sadly)
          sponsored by Logitech (maybe one day 🤞🏽).</p>
          <p><sup>2</sup>Another Disclaimer: All the links listed above are affiliate links.  
            This just means that if you use those links to purchase any of the above items,   
            I get a little kickback as a reward and at no extra cost to you. 😊</p>
        </div>
      </div>
    </div>
  )
}