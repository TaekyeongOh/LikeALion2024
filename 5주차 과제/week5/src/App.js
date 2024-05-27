import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = "/B551182/hospInfoServicev2/getHospBasisList";

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await axios.get(URL, {
        params: {
          serviceKey: process.env.REACT_APP_API_KEY,
          numOfRows: 1,
          pageNo: 10
        }
      });

      setData(response.data);
    } catch(e) {
      console.error('Error fetching data:', e);
      setError(e);
    }
    setLoading(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchData();
  }, []);

  if(loading) {
    console.log ("loading...")
    return <div>Loading...</div>;
  }

  if(error)  {
    return (<div> Error... {error.nessage} </div>);
  }

  if(!data)  { 
    return <div className="App"> No Data </div>; 
  }
  
  return (
    <div className="App">
      {data ? (
          <>
            <p>병원명: {data.response.body.items.item.yadmNm}</p>
            <p>주소: {data.response.body.items.item.addr}</p>
            <p>전화번호: {data.response.body.items.item.telno}</p>
            <p>RAT(신속항원검사) 가능 여부: {data.response.body.items.item.ratPsblYn}</p>
            <p>PCR 가능 여부: {data.response.body.items.item.pcrPsblYn}</p>
          </>
        ) : (
          <div>No Data</div>
        )}
    </div>
  );
}

export default App;