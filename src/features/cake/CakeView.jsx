import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "./cakeSlice"

export const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <>
            <h2>Numbe of Cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
        </>
    )
}
