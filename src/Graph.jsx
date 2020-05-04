import React from 'react';
import PieChart from './PieChart';
import LineChart from './LineChart';
import BarChart from './BarChart';

const Graph= ({data,info}) =>{
    if(info.choiceGraphModel === "PieChart"){
        
        return(
            <div>
                <PieChart data={data} info={info}/>
            </div>
        )
    }
    if(info.choiceGraphModel === "BarChart"){
        return(
            <div>
                <BarChart data={data} info={info}/>
            </div>
        )
    }
    if(info.choiceGraphModel === "LineChart"){
        return(
            <div>
                <LineChart data={data} info={info}/>
            </div>
        )
    }
}
export default Graph;