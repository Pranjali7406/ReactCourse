import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  // const expenseDate = new Date(2023, 3, 21);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  return (
    <Card className="expense-item">
      {/* First way of passing props */}
      {/* <div>{props.date.toDateString()}</div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* second way of [assing pr recieving props] */}
      {/* <div>{props.expense.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div> */}

      {/* third way */}
      {/* <div>{date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div> */}
    </Card>
  );
}

export default ExpenseItem;
