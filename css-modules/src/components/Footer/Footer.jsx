import style from './Footer.module.css'

export function Footer() {
  console.log("Footer style object")
  console.log(style)

  return (
    <footer className='container'>
      <h1>Footer</h1>
    </footer>
  )
}