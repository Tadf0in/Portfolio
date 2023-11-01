import Cell from "./Cell";

export default function Grid () {

    return <div className="grid">
        <Cell data={{
            date: '2021',
            name: 'Hamstergram'
        }}/>
        <Cell data={{
            date: '2022',
            name: 'FlouFlix'
        }}/>
        <Cell data={{
            date: 'octobre 2023',
            name: 'guncky'
        }}/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
    </div>
}