import React, { Component } from 'react';
import { getChars } from '../services/last-airbender-api';
import styles from './List.css';
import Card from '../components/Card';

export default class List extends Component {
    state = {
      list: [],
      page: 1,
      end: false
    }

    searchChars = (page) => {
      let list;
      getChars(this.props.match.params.character, page)
        .then(res => {
          list = res.map(char => {
            return (
              <Card key={char._id} _id={char._id} name={char.name} photoUrl={char.photoUrl} />
            );
          });
        })
        .then(() => {
          if(list.length > 0) {
            this.setState({ list: list, end: false });
          } else {
            this.setState(state => {
              return { end: true, page: state.page - 1 };
            });
          }
        });
    }

    componentDidMount() {
      this.searchChars(this.state.page);
    }

    componentDidUpdate(prevProps, prevState) {
      if(prevState.page !== this.state.page) {
        this.searchChars(this.state.page);
      }
    }

    handlePrev = () => {
      if(this.state.page > 1) {
        this.setState(state => {
          return {
            page: state.page - 1
          };
        });
      }
    }

    handleNext = () => {
      if(!this.state.end) {
        this.setState(state => {
          return {
            page: state.page + 1
          };
        });
      }
    }

    render() {
      return (
        <>
          <button onClick={this.handlePrev}>PREV</button>
          <button onClick={this.handleNext}>NEXT</button>
          <div className={styles.List}>
            {this.state.list}
          </div>
        </>
      );
    }

}
