import React from 'react';
import {connect} from 'react-redux';
import {expenseUpdate, expenseDelete, expenseCreate} from '../../../actions/expense-actions';
import { renderIf } from '../../../lib/utils';
import ExpenseForm from '../expense-form/expense-form';

class ExpenseItem extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.expense || {};

    this.handleEditing = this.handleEditing.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEditing() {
    this.setState({editing: !this.state.editing});
  }

  handleUpdate(expense) {
    this.setState({editing: !this.state.editing});
    this.props.ExpenseItemExpenseUpdate(expense);
  }

  handleDelete() {
    console.log('SHOULD DELETE EXPENSE WITH OBJ:', this.props.expense);
    this.props.ExpenseItemExpenseDelete(this.props.expense);
  }
  
  render(){
    return(
      <li onDoubleClick={this.handleEditing}>
        <p>Expense: {this.props.expense.name}</p>
        <p>Price: ${this.props.expense.price}</p>
        <button type="button" onClick={this.handleDelete}>X</button>
        {renderIf(this.state.editing, <ExpenseForm
          expense={this.props.expense}
          buttonText="Update expense"
          onComplete={this.handleUpdate}/>)}
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
  ExpenseItemExpenseUpdate: expense => dispatch(expenseUpdate(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);