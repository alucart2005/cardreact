import './App.css'
import { useState } from 'react';
import User from './components/User'
import data from './data/users.json'
import colors from './data/colors';
import Button from './components/Button';

function App() {
  
  function randomData(array) {
    let indexRandomColor = Math.floor(Math.random() * array.length);
    return indexRandomColor;
  }

  let numberRamdon = randomData(data);
  const [indexRamdon, setIndexRamdom] = useState(numberRamdon);
  console.log(indexRamdon);

  let color = randomData(colors);
  const bgColor = {
    backgroundColor: colors[color],
    color: colors[color],
  };

  return (

    <section  className='container' style={bgColor} >
      <div className='container__data'>
        {<User
          name={`${data[indexRamdon].name.title} ${data[indexRamdon].name.first} ${data[indexRamdon].name.last}`}
          picture={`${data[indexRamdon].picture.large}`}
          iconEmail={<i className='bx bxs-envelope'></i>}
          email={` ${data[indexRamdon].email}`}
          iconPhone={<i className='bx bxs-phone'></i>}
          phone={` ${data[indexRamdon].phone}`}
          iconLocation={<i className='bx bxs-location-plus'></i>}
          location={` ${data[indexRamdon].location.country} ${data[indexRamdon].location.state} ${data[indexRamdon].location.city}`}
        />
        }
      </div>
      <div className='container__button' 
      style={
        {backgroundColor:colors[color]}
        }> 
        {<Button
          click={() =>
          setIndexRamdom(randomData(data))}
        icon={<i className='bx bx-shuffle bx-tada' ></i>}
      />}
      </div>

    </section>
  )
}

export default App

