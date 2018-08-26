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

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: false,
      numberOfGuests: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // Here is an example of ES6 computed property name syntax.
    // This is shorthand for creating and merging a partial state.
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

class GenreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'action'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite genre is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite genre:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="action">Action</option>
            <option value="platformer">Platformer</option>
            <option value="racing">Racing</option>
            <option value="rpg">Role-playing Game</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class EssayForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'Please describe your favorite movie.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A description was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className='movieForm' onSubmit={this.handleSubmit}>
        <label>
          Movie Description:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    );
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

// Lifting the state up example
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale; 
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput 
          scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput 
          scale='f' 
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

// Composition over Inheritance
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
       {props.title}
      </h1>
      <p className="Dialog-mesage">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: '' };
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome to the tutorial, ${this.state.login}!`);
  }

  render() {
    return (
      <Dialog title="React Tutorial Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

/*
 * Thinking In React
 * https://reactjs.org/docs/thinking-in-react.html
 */

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div className='filterableProductTable'>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <div>
          <input type='text' name='desc' placeholder='Search for an item...'></input>
        </div>
        <div>        
          <input type='checkbox' id='inStock' name='inStock'></input>
          <label htmlFor='inStock'>Include only in stock items.</label>
        </div>
      </form>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }

      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );

      lastCategory = product.category;

    });

    return (
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan='2' className='productCategoryRow header'>
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? 
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
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
      <EssayForm />
      <GenreForm />
      <input type="file" />
      <ReservationForm />
      <SplitPane 
        left={
          <BoilingVerdict celsius="102" />
        }
        right={
          <BoilingVerdict celsius="98" /> 
        } />      
      <Calculator />
      <WelcomeDialog />
      <Dialog
        title="Hello World!"
        message="This is just a React tutorial playground." />
      <SignUpDialog />
      <hr/>
      <FilterableProductTable products={PRODUCTS}/>
    </div>
  );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);