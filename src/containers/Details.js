import React, { Component } from 'react';
import Card from '../components/Card';
import { getCharById } from '../services/last-airbender-api';
import styles from './Details.css'

export default class Details extends Component {

    state = {
      name: '',
      photoUrl: '',
      gender: '',
      hair: '',
      affiliation: ''
    };

    getCharacterData() {
      getCharById(this.props.match.params._id)
        .then(res => {
          this.setState({
            name: res.name,
            photoUrl: res.photoUrl,
            gender: res.gender,
            hair: res.hair,
            affiliation: res.affiliation
          });
        });
    }

    componentDidMount() {
      this.getCharacterData();
    }

    render() {
      return (
        <div className={styles.Details}>
          <Card _id={this.props.match.params._id} name={this.state.name} photoUrl={this.state.photoUrl} />
          <span>Gender: {this.state.gender}</span>
          <span>Hair: {this.state.hair}</span>
          <span>Affiliation: {this.state.affiliation}</span>
        </div>
      );
    }
}
