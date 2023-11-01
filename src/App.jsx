import { useEffect } from "react"
import Grid from "./components/Grid/Grid"
import './scroll.css'
import Letter from "./components/Letter"

function App() {

  useEffect(() => {
    const root = document.getElementById('root')
    const d2 = document.getElementById('d2')
    root.style.height = window.innerHeight + d2.clientHeight + 'px'
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const title = document.getElementById('title')
      const d1 = document.getElementById('d1')
      const d2 = document.getElementById('d2')
      const d3 = document.getElementById('d3')

      let heightd1 = window.innerHeight - window.scrollY < 0 ? 0 : window.innerHeight - window.scrollY

      title.style.fontSize = heightd1/10 + 'px'
      d1.style.height = heightd1 + 'px'
      d2.style.top = d1.clientHeight + 'px'
      d3.style.height = window.scrollY - d2.clientHeight + 'px'
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return <>
    <div id="d1" className="part">
      <h1 id="title">
        { "LOUIS".split('').map((l, i) => 
          <Letter l={l} key={i}/>
        )}
        <br/>
        { "AMOUDRUZ".split('').map((l, i) => 
          <Letter l={l} key={i+5}/>
        )}
      </h1>
      <img src="https://static.vecteezy.com/system/resources/previews/005/178/732/non_2x/abstract-black-and-purple-sci-fi-technology-wallpaper-suitable-for-application-desktop-banner-background-print-backdrop-and-other-print-and-digital-work-related-vector.jpg"></img>
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
