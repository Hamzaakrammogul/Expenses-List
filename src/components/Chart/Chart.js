import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {

    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);

    const totalMaximum = Math.max(...dataPointsValues) //Max needs list of standalone arguments and our points value still is array we will use spread operator to pull out all the elements form an array

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={null} lable={dataPoint.label} />)}
        </div>
    );
}

export default Chart; 