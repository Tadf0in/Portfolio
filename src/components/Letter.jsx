import { useState } from "react"

export default function Letter ({l}) {
    const [letter, setLetter] = useState(l)

    const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ',']
    

    return <span 
        onMouseEnter={() => setLetter(lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)])}
        onMouseLeave={async () => {
            await new Promise(r => setTimeout(r, 300))
            setLetter(l)
        }}
    >
        {letter}
    </span>
}