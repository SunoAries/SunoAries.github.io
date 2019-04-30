import React, {Component} from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div>以前可能有这个，但归档之后就不要了。嗯</div>
      </div>
    );
  }
}
