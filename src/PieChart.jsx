import React from 'react'
import Plot from 'react-plotly.js';

const PieChart = ({data,info})=>{
    let values =[];
    let labels = [];
    data.map(element =>{
        return(values.push(element.value),
        labels.push(element.name)
        )
    })
    let dataGraph = [{
        values: values,
        labels: labels,
        type:'pie'
    }]
    let title = info.titleGraphic;
    return(
        <Plot data={dataGraph} layout={{title:title}} />
    )
}

export default PieChart;