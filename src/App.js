import React from 'react'

function App() {
  const array = [1, 2, [10, 12], { name: "appscrip" },
    ["javascript", "typescript"], "python",
    [123, 212, [343, 444, 555, [999, 888, 7777], ["code"]], { location: "Bengaluru" }, [160062]], 3, 4]


  const iterateArray = (ar) => {
    ar.forEach(element => {
      return res(iterateArray);
    });
  }

  const iterateObject = (obj) => {
    Object.keys(obj).map((key) => {
      const value = obj[key];

      if (typeof value === 'object') {
        return res(obj[value]);
      }

      return (
        <div>
          <span>{key}</span>
          <span>{value}</span>
        </div>
      );
    });
  }

  const res = array.map((item) => {

    if (typeof (item) === "object") {
      if (Array.isArray(item)) {
        iterateArray(item);
      }
      iterateObject(item);
    }

    return (
      <div>
        <span>{typeof item}</span>
        <span>{item}</span>
      </div>
    );
  })



  return (
    <div>
      {res}
    </div>
  )
}

export default App