import { useState } from "react"

export default function Cell ({data={}}) {
    
    data = {
        date: data.date ? data.date : '01/01/2001',
        name: data.name ? data.name : 'Project Name',
        details: 'en savoir plus',
    }

    const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ',']
    
    const [date, setDate] = useState(data.date)
    const [name, setName] = useState(data.name)
    const [details, setDetails] = useState(data.details)

    const shuffle = async (get, set, repeat=true) => {
        const baseText = get

        let random = []
        for (let i=0 ; i<4 ; i++) {
            let r = ''
            for (const char of baseText) {
                r += char === ' ' ? ' ' : lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)]
            }
            random.push(r)
        }

        if (repeat) {
            for (let i=0 ; i < random.length - 1 ; i++) {
                for (let j=0 ; j < random[0].length ; j++) {
                    set(random[i].slice(0, j) + random[i+1].slice(j))
                    await new Promise(r => setTimeout(r, 1*baseText.length))
                }
            }
        }

        for (let j=0 ; j <= baseText.length ; j++) {
            set(baseText.slice(0, j) + random[0].slice(j))
            await new Promise(r => setTimeout(r, 3*baseText.length))
        }
    }

    const shuffleCell = () => {
        shuffle(data.date, setDate)
        shuffle(data.name, setName)
        shuffle(data.details, setDetails)
    }

    return <div className="cell" onMouseEnter={() => shuffleCell()}>
        <span className="date">{date}</span>
        <span className="name">{name}</span>
        <span className="details">{details}</span>
    </div>
}