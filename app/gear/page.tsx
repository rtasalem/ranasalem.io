export default function Gear() {
  const items = [
    {
      icon: ':D',
      item: 'MacBook Pro 2020 13-inch',
      description: 'My personal computer that I use for developing personal projects, browsing, streaming etc.',
      price: '£0.00',
      url: 'not-a-real-url'
    }
  ]

  return (
    <div className="overflow-x-auto">
      <div className="max-w-3xl mx-auto">
        <table className="table">
          <thead>
            <tr key={index}>
              <th></th>
              <th>Item</th>
              <th>Description</th>
              <th>Price (GBP)</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ icon, item, description, price, url }, index) => (
              <tr>
                <th>{icon}</th>
                <td>{item}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>{url}</td> //include a href
              </tr>
            )))}
          </tbody>
        </table>
      </div>
    </div>
  )
}