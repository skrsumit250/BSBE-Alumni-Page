import { useState,useEffect } from "react";
function App(){
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbxY8Qrx1B8F390gOoDi4suCZnAp2UHpOLEdOtU42uzYRDvcZO1uCWSRi1KyBkv7k3qUQQ/exec',
          { method: 'GET', mode: 'cors' }
        );
        const jsonData = await response.json();
        console.log('Response data', jsonData);
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('Updated Data', data);
  }, [data]);
  
  return (
    <>
    {data.length > 0 ? (
      data.map((item, idx) => (
        <div key={idx}>
          <p>Column 1: {item.column1}</p>
          <p>Column 2: {item.column2}</p>
          <p>Column 3: {item.column3}</p>
          <p>Column 4: {item.column4}</p>
        </div>
      ))
    ) : (
      <p>Loading...</p>
    )}
  </>
  )
}
export default App;
