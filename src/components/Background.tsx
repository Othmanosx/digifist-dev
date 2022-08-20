import BG from "../assets/bg.png"

export default function Background() {
  return (
    <div className="bg-container">
      <div className="overlay"></div>
      <img className="bg-image" src={BG} alt="background" />
    </div>
  )
}
