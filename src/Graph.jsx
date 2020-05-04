import React from 'react';
import Plotly from 'plotly.js-dist';

const Graph= ({data,info}) =>{
    if(info.choiceGraphModel === "PieChart"){
        console.log(data);
        // let values =[];
        // let labels = [];
        // data.map(element =>{
        //     values.push(element.values);
        //     labels.push(element.name);
        // })
        // let dataGraph = [{
        //     values: values,
        //     labels: labels,
        //     type:'pie'
        // }]
        // console.log(dataGraph)
        return(
            <div>
                <h1>{info.titleGraphic}</h1>
                <p>{info.choiceGraphModel}</p>
            </div>
        )
    }
    if(info.choiceGraphModel === "BarChart"){
        return(
            <div>
                <p>Bar Chart Graph</p>
            </div>
        )
    }
    if(info.choiceGraphModel === "LineChart"){
        return(
            <div>
                <p>Line Chart Graph</p>
            </div>
        )
    }
}
export default Graph;