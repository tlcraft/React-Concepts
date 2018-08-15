import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function UserGreeting(props) {
  return (
    <div>
        <h1 className="title">
          Hello, {formatName(user)}!
        </h1>
        <h2>
          Good to see you!
        </h2>
      </div>
  );
}

function GuestGreeting(props) {
  return (
    <div>
        <h1 className="title"
          >Hello, stranger.
        </h1>
        <h2>
          Nice to meet you!
        </h2>
        {new Date().getHours() > 17 &&
          <div>
            <a href="#">Special deals!</a>
          </div>
        }
    </div>
  );
}

function Welcome(props) {
  const user = props.user;

  if (user) {
    return <UserGreeting user={user} />
  } else {
    return <GuestGreeting />
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      id: 'clock'
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const month = this.state.date.getMonth();
    const clock = (
        <div id={this.state.id}>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          {month > 5 && month < 9 ?
            <p>Enjoy summer!</p> :
            <p>Summer will be back</p>
          }
        </div>
    );
    return clock;
  }
}

function WarningBanner(props) {
  // returning null will hide a component but lifecycle events will still fire
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make 'this' work in the callback
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <button className={this.state.isToggleOn ? "on" : "off"} onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>  
        <WarningBanner warn={!this.state.isToggleOn} />
      </div>    
    );
  }
}

function AccountButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.title}
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <AccountButton onClick={this.handleLogoutClick} title='Logout' />;
    } else {
      button = <AccountButton onClick={this.handleLoginClick} title='Login' />;
    }

    return (
      <div>
        {button}
      </div>
    )
  }
}

class NameForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('A name was submitted: ' + this.state.value);

    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
        <div>
          {this.state.value}
        </div>
      </form>
    );
  }
}

let user = {
  firstName: 'John',
  lastName: 'Doe'
}
const numbers = [1, 2, 3, 4, 5];

function ListItem(props){
  return <li>{props.value}</li>
}

// Component elements should have keys, not HTML elements
// Note: A good rule of thumb is that elements inside the map() call need keys.
function NumberList(props) {
  const numbers = props.numbers;

  return (
    <ul>
      {numbers.map((number) => 
        <ListItem key={number.toString()}
                  value={number*2} />
      )}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Welcome user={user} />
      <Welcome user={null} />
      <Clock />
      <Clock />
      <Toggle />
      <LoginControl />
      <NumberList numbers={numbers}/>
      <NameForm />
    </div>
  );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);