import { useEffect } from "react"
import Grid from "./components/Grid";

function App() {

  useEffect(() => {
    const root = document.getElementById('root')
    const d2 = document.getElementById('d2')
    root.style.height = window.innerHeight + d2.clientHeight + 'px'
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const d1 = document.getElementById('d1')
      const d2 = document.getElementById('d2')
      const d3 = document.getElementById('d3')

      d1.style.height = window.innerHeight - window.scrollY < 0 ? 0 : window.innerHeight - window.scrollY + 'px'
      d2.style.top = d1.clientHeight + 'px'
      d3.style.height = window.scrollY - d2.clientHeight + 'px'
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, []);

  return <>
    <div id="d1" className="part">
      <h1>DIV 1</h1>
      <img src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"></img>
    </div>
    <div id="d2" className="part">
      <Grid />
    </div>
    <div id="d3" className="part">
      div3
    </div>
  </>
}

export default App
