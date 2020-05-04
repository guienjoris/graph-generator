import React from 'react';
import Plot from 'react-plotly.js';


const LineChart = ({data,info})=>{
    let values =[];
    let labels = [];
    data.map(element =>{
        return(values.push(element.value),
        labels.push(element.name)
        )
    })
    let dataGraph = [{
        y: values,
        x: labels,
        type:'scatter'
    }]
    let title = info.titleGraphic;
    return(
        <Plot data={dataGraph} layout={{title:title}} />
    )
}

export default LineChart;