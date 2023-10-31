import { useEffect } from "react"
import Grid from "./components/Grid";

function App() {

  useEffect(() => {
    const onScroll = e => {
      const d1 = document.getElementById('d1')
      const d2 = document.getElementById('d2')

      d2.style.height = window.scrollY + 'px'
      d1.style.height = window.innerHeight - d2.clientHeight + 'px'
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
  </>
}

export default App
