import React from "react";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    document.getElementById('test').addEventListener('invalid', () => {
      console.log('1111111111')
    })
    console.log(this.state.count)
    this.setState({ count: this.state.count + 1 }, () => console.log('callback', this.state.count))
    console.log(this.state.count)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  onInvalid = () => {
    console.log('111111')
    this.setState({count: this.state.count ++ })
  }

  render() {
    return (
      <div>
        {/*<Child title='1111'/>*/}
        {this.state.count}
        <form>
          <input id="test" type="text" pattern="^a" invalid={this.onInvalid}/>
          <input list="fruits"/>
          <datalist id="fruits">
            <option>苹果</option>
            <option>香蕉</option>
          </datalist>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'job'
    }
  }

  static getDerivedStateFromProps (nextProps, nextState) {
    console.log('++++++++++', nextProps)
    console.log('----------', nextState)
    return null
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps)
    console.log(prevState)
    return {}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('snapshot', snapshot)
  }

  handleClick = () => {
    this.setState({name: 'Jack'})
  }

  render() {
    return (
      <>
        <div>这是子界面</div>
        <button onClick={this.handleClick}>按钮</button>
      </>
    )
  }
}