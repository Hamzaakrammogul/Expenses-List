import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart= props => {

    const chartDataPoints =
    [
        {label:'Jan' , value: 0},//1
        {label:'Feb' , value: 0},//2
        {label:'Mar' , value: 0},//3
        {label:'Apr' , value: 0},//4
        {label:'May' , value: 0},//5
        {label:'Jun' , value: 0},//6
        {label:'Jul' , value: 0},//7
        {label:'Aug' , value: 0},//8
        {label:'Sep' , value: 0},//9
        {label:'Oct' , value: 0},//10
        {label:'Nov' , value: 0},//11
        {label:'Dec' , value: 0},//12
    ];

    for(const expense of props.expensesItems)
    {
        const expenseMonth = expense.date.getMonth();  // starting at 0 => january => 0
        chartDataPoints[expenseMonth].value += expense.amount 
    }
    
    return(
        <Chart dataPoints={chartDataPoints} />
    )

}

export default ExpensesChart;