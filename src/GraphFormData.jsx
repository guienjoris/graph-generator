import React, { useState } from 'react'

const GraphFormData = ({onDataAdd})=>{
    const [newData,setNewData] = useState({});

    const handleChangeData = e =>{
        const {name,value} = e.target;
        setNewData({...newData,[name]:value});
    }
    const handleSubmitData = e =>{
        e.preventDefault();
        const name = newData.name;
        const value = newData.value;
        onDataAdd({name,value});
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

export default GraphFormData;