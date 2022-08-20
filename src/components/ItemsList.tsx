import { items } from "../data"
import Item from "./Item"

export default function ItemsList() {
  return (
    <div className="items-list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}
