import React, { useState } from 'react'

const GraphFormData = ({onDataAdd,info})=>{
    const [newData,setNewData] = useState({name:'',value:0});

    const handleChangeData = e =>{
        const {name,value} = e.target;
        setNewData({...newData,[name]:value});
    }

    let [counter,setCounter] = useState(0);

    if(info.choiceGraphModel === "PieChart"){
    const handleSubmitData = e =>{
        e.preventDefault();
        const name = newData.name;
        const value = newData.value;
        setCounter(counter +1)
        onDataAdd({name,value,counter});
        setNewData({name:'',value:0})
    }
    return(
        <div>
            <form onSubmit={handleSubmitData}>
                <p>Datas:</p>
                <input type="text" placeholder="Nom de la data" name="name" onChange={handleChangeData} value={newData.name}  />
                <input type="number" placeholder="Valeur de la data" name="value" onChange={handleChangeData} value={newData.value} />
                <button>Add data</button>
            </form>
        </div>
    )
    }
    if(info.choiceGraphModel === "BarChart"){
        return(
            <div>
                <p>Bar Chart</p>
            </div>
        )
    }
    if(info.choiceGraphModel === "LineChart"){
        return(
            <div>
                <p>Line Chart</p>
            </div>
        )
    }
}

export default GraphFormData;