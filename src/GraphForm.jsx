import React, { useState } from 'react';
import GraphFormData from './GraphFormData';

function GraphForm(){
    const [infos, setInfos]= useState({choiceGraphModel:"PieChart"});
    const [datas, setDatas]= useState([]);
    const handleChangeInfos = e =>{
        const {name,value}= e.target 
        setInfos({...infos,[name]:value})
    }
    const handleAddData = data=>{
        const updatedDatas = [...datas];
        updatedDatas.push(data);
        setDatas(updatedDatas);
        console.log(datas)
    }
    return(
        <div>
            <form>
                <p>Titre du graphique:</p>
                <input type="text" placeholder="Titre du graphique"  name="titleGraphic" onChange={handleChangeInfos}  />
                <div>
                    <p>Choix du type de graphique:</p>
                    <select name="choiceGraphModel" onChange={handleChangeInfos}  >
                        <option value="PieChart" >Camembert</option>
                        <option value="BarChart">Barres</option>
                        <option value="LineChart">Lignes</option>
                    </select>
                </div>
            </form>
            <GraphFormData onDataAdd={handleAddData}  />
            <p>{infos.titleGraphic}</p>
            <p>{infos.choiceGraphModel}</p>
            <ul>{datas.map((data) =>{
                return(<div>
                <li>{data.name}</li>
                <li>{data.value}</li>
                </div>
            )})}
                </ul>
        </div>
    );
}

export default GraphForm;