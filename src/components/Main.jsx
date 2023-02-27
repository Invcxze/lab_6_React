import React, { useEffect, useState} from 'react'
export default function Home({ getPets, pets, isLoggedIn,addToCart,handleLoader}) {
    const result = pets.map((pet) => { 
        return (
            <div className='box' key={pet.id}>
                <h1>{pet.name}</h1>
                {isLoggedIn&&<button className='btn_onHome' onClick={() =>addToCart(pet.id)}>Добавить в корзину</button>}
            </div>
        )
    });
    return (
    <div>
        {result}
    </div>
  );
}