import React from 'react'
import { ShopItem } from '@/app/types/types'
import Link from 'next/link'

function ShopCard(props: ShopItem) {
  return (
    <Link href={`shop/${props.id}`} className="p-4">
      <img src={props.image} alt={props.name} className="object-fill" />
      <h2 className="text-xl font-bold text-center">{props.name}</h2>
      <p className="text-gray-600 text-center">${props.price}</p>
    </Link>
  )
}

export default ShopCard