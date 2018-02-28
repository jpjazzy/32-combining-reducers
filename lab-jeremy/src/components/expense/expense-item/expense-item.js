import React from 'react';
import {connect} from 'react-redux';
import {expenseUpdate, expenseDelete, expenseCreate} from '../../../actions/expense-actions';
import { renderIf } from '../../../lib/utils';

class ExpenseItem extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.expense || {};

    this.handleDouble = this.handleDouble.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDouble () {

  }

  handleDelete() {
    console.log('SHOULD DELETE EXPENSE WITH OBJ:', this.props.expense);
    this.props.ExpenseItemExpenseDelete(this.props.expense);
  }
  
  render(){
    return(
      <li onDoubleClick={this.handleDouble}>
        <p>Expense: {this.props.expense.name}</p>
        <p>Price: ${this.props.expense.price}</p>
        <button type="button" onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  ExpenseItemExpenseDelete: expense => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);