/*
  Navbar layout:
  - Left: brand name
  - Right: navigation links
  Update text or add/remove links below.
*/
export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-brand">Jonny Pettit</div>
      <div className="nav-links">
        <a href="#weddings">Weddings</a>
        <a href="#Events">Events</a>
        <a href="#Commercial">Commercial</a>
        <a href="#about">About</a>
        <a href="#book">Book</a>
      </div>
    </nav>
  )
}
