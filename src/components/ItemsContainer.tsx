import ItemsList from "./ItemsList"

export default function ItemsContainer() {
  return (
    <div className="items-container">
      <div className="header">
        <h2>Everyday tops, we have something to suit every occasion.</h2>
        <span>
          At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit
          tincidunt semper eu proin leo gravida cursus.
        </span>
        <p>Shop all everyday items</p>
      </div>
      <ItemsList />
    </div>
  )
}
