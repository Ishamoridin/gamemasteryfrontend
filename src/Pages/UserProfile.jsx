import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfile({isUserGM}){
const navigate = useNavigate()
useEffect(() => {
    isUserGM ? navigate("/GMScreen") : navigate("/PlayerProfile")
}, [isUserGM, navigate])
    return(
        <>
        </>
    )
}