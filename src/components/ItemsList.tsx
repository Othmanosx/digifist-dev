import { items } from "../data"
import Arrow from "./Arrow"
import Item from "./Item"

export default function ItemsList() {
  return (
    <div className="list-container">
      <div className="items-list">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <Arrow />
    </div>
  )
}
