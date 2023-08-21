import React, { Component } from 'react';
import {
  SearchBar,
  SearchForm,
  SearchFormbutton,
  SearchForminput,
} from './Searchbar.styled';
import { BiSearchAlt } from 'react-icons/bi';
export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormbutton type="submit">
            <BiSearchAlt />
          </SearchFormbutton>
          <SearchForminput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
