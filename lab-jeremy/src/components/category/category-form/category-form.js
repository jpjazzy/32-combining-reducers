import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category
      ? this.props.category
      : {
        title: '',
        budget: 0,
        editing: false,
        completed: false,
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.onComplete(this.state);
    this.setState({title: '', budget: 0});
  }

  render() {
    return  (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Category name..."
          required="true"
          onChange={this.handleChange}/>

        <input
          type="number"
          name="budget"
          value={this.state.budget}
          placeholder="Budget..."
          required="true"
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;
