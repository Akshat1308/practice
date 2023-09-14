import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Page2.css"
const url = " https://jsonplaceholder.typicode.com/users"

function Page2() {
    const [data, setData] = useState([]);
    const getData = async (url) => {
        try {
            const response = await fetch(url);
            const res = await response.json()
            setData(res)
        }
        catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        getData(url);
    })
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((output) => (
                            <tr key={output.id}>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.username}</td>
                            </tr>
                        )
                        )}

                </tbody>
            </table ></>
    )
}

export default Page2