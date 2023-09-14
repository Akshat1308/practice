import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
const items = ["abc", "def", "pqr"];
function Page1() {
    const handleClick = (item) => {
        console.log(item)
    }
    return (
        <>
            <h1>hiiii</h1>
            <ul className="list-group">
                {items.map((item) => (<li key={item} className="list-group-item" onClick={() => handleClick(item)}>{item}</li>))}
            </ul>
        </>
    )
}

export default Page1