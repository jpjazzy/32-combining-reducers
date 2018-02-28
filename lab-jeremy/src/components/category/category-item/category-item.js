import React from 'react';
import {connect} from 'react-redux';
import {categoryUpdate, categoryDelete} from '../../../actions/category-actions';
import { renderIf } from '../../../lib/utils';
import CategoryForm from '../category-form/category-form';
import ExpenseForm from '../../expense/expense-form/expense-form';
import { expenseCreate } from '../../../actions/expense-actions';
import ExpenseItem from '../../expense/expense-item/expense-item';

class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.cat || {};

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleUpdateForm = this.handleUpdateForm.bind(this);
    this.handleAddExpense = this.handleAddExpense.bind(this);
  }

  handleUpdateForm() {
    this.setState({editing: !this.state.editing});
  }

  handleUpdate(cat) {
    this.setState({editing: !this.state.editing});
    this.props.CategoryItemCategoryUpdate(cat);

  }

  handleDelete() {
    this.props.CategoryItemCategoryDelete(this.state);
  }

  handleAddExpense(expense) {
    this.props.CategoryItemExpenseCreate(expense);
  }
  
  render(){
    return(
      <div className="category-item" key={this.props.cat._id} onDoubleClick={this.handleUpdateForm}>
        <h3>Category: {this.props.cat.title}</h3>
        <p>Budget: ${this.props.cat.budget}</p>
        <button className="cat-delete-button" type="button" onClick={this.handleDelete}>Delete</button>
        <ul>
          {renderIf(this.props.expenses[this.props.cat._id], this.props.expenses[this.props.cat._id].map(expense => {
            return <ExpenseItem key={expense._id} expense={expense}/>;
          }))}
        </ul>
        <ExpenseForm 
          category={this.props.cat}
          buttonText='Add expense'
          onComplete={this.handleAddExpense}/>
        {renderIf(this.state.editing, <CategoryForm
          category={this.props.cat}
          buttonText='Update'
          onComplete={this.handleUpdate}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  CategoryItemCategoryUpdate: category => dispatch(categoryUpdate(category)),
  CategoryItemCategoryDelete: category => dispatch(categoryDelete(category)),
  CategoryItemExpenseCreate: expense => dispatch(expenseCreate(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);