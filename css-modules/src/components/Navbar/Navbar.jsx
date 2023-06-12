import style from './Navbar.module.css'

export function Navbar(props) {
  const {
    className,
  } = props
  console.log("Navbar style object")
  console.log(style)

  return (
    <header className={style.navbar + " " + className}>
      <h1>Logo</h1>

      <nav className={style.navigationMain}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}