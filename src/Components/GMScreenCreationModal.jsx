import { useState } from "react"
export default async function GMScreenCreationModal(){
    const [isOpen, toggleOpen] = useState(false);
     
    
    async function OpenModal(){
        return (
        <div onClick={() => toggleOpen(false)}>

        </div>
        )
    };
    async function ClosedModal(){
        return (
        <div onClick={() => toggleOpen(true)} >
            <p>Create</p>
        </div>
        )
    };
    return (
    <>
    {isOpen ?  <OpenModal /> : <ClosedModal />}
    </>
    )
};