import { ImStarEmpty, ImStarFull } from "react-icons/im"

const Favorite = () => {
    return (
        <div>
            <ImStarFull style={{color: "red"}} />
            <ImStarEmpty/>
        </div>
    )
}

export default Favorite