import React, { useState } from 'react';
import Cars from './components/Cars';

const default_car = "/cars/all_cars-transformed.png"
const red_car = "/cars/red-transformed.png";
const green_car = "/cars/green-transformed.png";
const blue_car = "/cars/blue-transformed.png";
const violet_car = "/cars/violet-transformed.png";
const orange_car = "/cars/orange-transformed.png";
const black_car = "/cars/black-transformed.png";

function App() {
  const [params, setParams] = useState("Change Background Color with Cars"); 
  const [color, setColor] = useState("#F8F8F8");
  const [car, setCar] = useState(); // default car
  const [hidden, setHidden] = useState(false); // default car

  return (
    <>
      <div className='h-screen w-full duration-200' style={{ backgroundColor: color }}>
        <h1 className='font-mono justify-center text-5xl font-bold text-center text-red-400'>{params}</h1>
        <Cars name={car} />

        <img src={default_car} className='w-auto h-3/5 justify-center inset-x-0 mt-6 ml-auto mr-auto' hidden={hidden}/>

        <div className='outer fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='inner flex flex-wrap justify-center gap-3 bg-pink-200 px-3 py-2 rounded-3xl'>
            <button
              onClick={() => {
                setCar(red_car);
                setColor("Red");
                setParams("");
                setHidden(true);
              }}
              className='px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "red" }}>Red</button>
            <button
              onClick={() => {
                setCar(green_car);
                setColor("Green");
                setParams("");
                setHidden(true);
              }}
              className='px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "green" }}>Green</button>
            <button
              onClick={() => {
                setCar(blue_car);
                setColor("Blue");
                setParams("");
                setHidden(true);
              }}
              className='px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "Blue" }}>Blue</button>
            <button
              onClick={() => {
                setCar(violet_car);
                setColor("Violet");
                setParams("");
                setHidden(true);
              }}
              className='px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "Violet" }}>Violet</button>
            <button
              onClick={() => {
                setCar(orange_car);
                setColor("Orange");
                setParams("");
                setHidden(true);
              }}
              className='px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "Orange" }}>Orange</button>
            <button
              onClick={() => {
                setCar(black_car);
                setColor("Black");
                setParams("");
                setHidden(true);  
              }}
              className='px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "Black" }}>Black</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;