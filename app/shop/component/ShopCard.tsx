import React from 'react'
import { ShopItem } from '@/app/types/types'

function ShopCard(props: ShopItem) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{props.name}</h2>
      <p className="text-gray-600">{props.description}</p>
      <p className="text-gray-600">${props.price}</p>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md">Add to Cart</button>
      <img src={props.image} alt={props.name} className="w-full h-48 object-cover rounded-md" />
    </div>
  )
}

export default ShopCard