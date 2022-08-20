import { useState } from "react"
import { ItemType } from "../types"

type Props = {
  item: ItemType
}

export default function Item({ item }: Props) {
  const [activeColor, setActiveColor] = useState("#99C3CC")
  return (
    <div className="item">
      <img src={item.image} alt="item image" />
      <p>{item.title}</p>
      <div className="details">
        <p>{item.price}</p>
        <div className="colors">
          {item.colors.map((color) => (
            <div
              key={color}
              onClick={() => setActiveColor(color)}
              className={"color" + (color === activeColor ? " active" : "")}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
