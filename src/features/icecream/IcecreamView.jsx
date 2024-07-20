import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "./icecreamSlice"

export const IcecreamView = () => {
    const [value, setValue] = useState(1)
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()

    return (
        <>
            <h2>Numbe of Ice Creams - {numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
            <input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))} />
            <button onClick={() => dispatch(restocked(value))}>Restock Ice Cream</button>
        </>
    )
}
