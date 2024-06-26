import React from 'react';

import './Home.css';


function Home() {
    return (
        <>
            <div className="bg-black flex justify-center items-center  w-full h-screen">
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-5xl font-bold justify-center items-center  text-blue-800'>Seja bem vinde!</h2>
                    <p className='text-xl justify-center items-center  text-blue-800'>Expresse aqui seus pensamentos e opniões</p>

                    <div className="flex justify-around gap-4">

                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
              </div>
                </div>
          
        </div>

      </>
    );
}

export default Home;