import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <form>
          <input type="text" placeholder="Search..." />
          <label>
            <input type="checkbox" /> Only show products in stock
          </label>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stocked</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "lightgrey" }}>
              <th colSpan={3}>Fruits</th>
            </tr>
            <tr>
              <td>Apple</td>
              <td>$1</td>
              <td style={{ backgroundColor: "lightgreen" }}>Yes</td>
            </tr>
            <tr>
              <td>Dragonfruit</td>
              <td>$1</td>
              <td style={{ backgroundColor: "lightgreen" }}>Yes</td>
            </tr>
            <tr>
              <td>Passionfruit</td>
              <td>$2</td>
              <td style={{ backgroundColor: "none" }}>No</td>
            </tr>
            <tr style={{ backgroundColor: "lightgrey" }}>
              <th colSpan={3}>Vegetables</th>
            </tr>
            <tr>
              <td>Spinach</td>
              <td>$2</td>
              <td style={{ backgroundColor: "lightgreen" }}>Yes</td>
            </tr>
            <tr>
              <td>Pumpkin</td>
              <td>$4</td>
              <td style={{ backgroundColor: "none" }}>No</td>
            </tr>
            <tr>
              <td>Peas</td>
              <td>$1</td>
              <td style={{ backgroundColor: "lightgreen" }}>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
