import './_dashboard.scss';
import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate} from '../../actions/category-actions';
import CategoryForm from '../category/category-form/category-form';
import CategoryItem from '../category/category-item/category-item';

class Dashboard extends React.Component {
  render() {
    return (
      <section>
        <h1>J-Expense list</h1>

        <CategoryForm
          buttonText='Create category'
          onComplete={this.props.dashboardCategoryCreate}/>
        {this.props.categories ?
          this.props.categories.map(cat => {
            return <CategoryItem key={cat._id} cat={cat}/>;
          })
          :
          undefined
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
