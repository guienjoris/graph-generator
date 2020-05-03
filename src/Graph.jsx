import React from 'react'

const Graph= ({data,info}) =>{
    return(
        <div>
            <ul>{data.map((data) =>{
                return(<div key={data.counter}>
                <li>{data.counter}</li>
                <li >{data.name}</li>
                <li >{data.value}</li>
                </div>
            )})}
                </ul>
        </div>
    )
}
export default Graph;