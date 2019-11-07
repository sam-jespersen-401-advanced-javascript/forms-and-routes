import React, { Component } from 'react';
import { getRandom } from '../services/last-airbender-api';
import Card from '../components/Card';

export default class Home extends Component {
    state = {
      photo: '',
      name: '',
      _id: ''
    }

    componentDidMount() {
      this.getRandomChar();
    }

    refreshHandler = () => {
      this.getRandomChar();
    }

    getRandomChar = () => {
      getRandom()
        .then(res => {
          const photo = res[0].photoUrl;
          const name = res[0].name;
          const _id = res[0]._id;
          this.setState({ photo: photo, name: name, _id: _id });
        });
    }

    searchHandler = (event) => {
      event.preventDefault();
      this.props.history.push(`/list/${this.state.searchBar}`);
    }

    changeHandler = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    render() {
      return (
        <>
          {this.state.name && <Card name={this.state.name} _id={this.state._id} photoUrl={this.state.photo} />}
          <button onClick={this.refreshHandler}>Refresh</button>
          <form onSubmit={this.searchHandler}>
            <input type="text" name="searchBar" onChange={this.changeHandler} />
            <button>Search!</button>
          </form>
        </>
      );
    }
}

