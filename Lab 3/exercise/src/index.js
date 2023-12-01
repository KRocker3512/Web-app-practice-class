import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//----------------------------Exercise 0-> Exercise1.1-------------------------------------
// import Ex0 from './exercise/exercise0';
// import Ex01 from './exercise/exercise0.1';
// import Ex02 from './exercise/exercise0.2';
// import Ex04 from './exercise/exercise0.4';

// import MySection from "./MySection";
// import MyButton from "./MyButton";
// import MyComponent from './Component/MyComponent';
// import MyComponent1_1 from './Component/MyComponent1.1';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   //<MyComponent1_1 />
//   //<MyComponent />
//   // <React.StrictMode>
//   //   <Ex04 />
//   // </React.StrictMode>
//   // <MySection>
//   //   <MyButton>My Button Text</MyButton>
//   // </MySection>

// );

//---------------------------------Exercise 1.2---------------------------------------------------

// import MyButton1_2 from './Component/MyButton1.2';
// import MyList from './Component/MyList';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const appState = { 
//   text: "My Button", 
//   disabled: true,
//   items: ["First", "Second", "Third"],
// };

// function render(props) {
//   root.render(
//     <main>
//       <MyButton1_2 text={props.text} disabled={props.disabled} />
//       <MyList items={props.items} />
//     </main>
//   );
// }

// render(appState);

// setTimeout(() => {
//   appState.disabled = false; 
//   appState.items.push("Fourth");

//   render(appState);
// }, 1000);

//---------------------------------Exercise 1.3---------------------------------------------------
// import MyButton1_3 from './Component/MyButton1.3';
// const root = ReactDOM.createRoot(document.getElementById('root'));

// function render({ second }) {
//   root.render( 
//     <main>
//       <MyButton1_3 />
//       <MyButton1_3 text={second.text} disabled={second.disabled} /> 
//     </main>
//   );
// }

// render({
//   second: {
//   text: "Second Button",
//   disabled: true,
//   },
// });

//---------------------------------Exercise 2.1 -> 2.3---------------------------------------------------
// //import App from './Component/App2.1';
// //import App from './Component/App2.2';
// import App from './Component/App2.3';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />)

//---------------------------------Exercise 3---------------------------------------------------
// import MyInput3 from './Component/MyInput3';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyInput3 />)

//---------------------------------Exercise 4.1---------------------------------------------------
// const divStyle = {
//   textAlign: 'center',
//   fontSize: '15px',
//   color: '#d0f0c0',
//   border: '1px solid green',
// };

// const element = (
//   <div style={divStyle} >Green is the prime color of the world</div>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(element);

//---------------------------------Exercise 4.2---------------------------------------------------
// import { Button } from "antd"; 
// import "antd/dist/reset.css";

// const handleClick = () => {
//   alert('Alert!!!');
// };

// const element = (
//   <Button style={{ margin: "10px 10px" }} type="primary" onClick={handleClick}>Alert me !</Button>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(element);

//---------------------------------Exercise 4.3---------------------------------------------------

// const smartPeople = [
//   {name: 'Johann Goethe', age: 82, IQ: 210 },
//   { name: 'Albert Einstein', age: 76, IQ: 205 }, 
//   {name: 'Leonardo da Vinci', age: 67, IQ: 180 }, 
//   { name: 'Isaac Newton', age: 84, IQ: 190 }, 
//   {name: 'James Maxwell', age: 48, IQ: 190 },
//   { name: 'Rudolf Clausius', age: 66, IQ: 190 },
//   {name: 'Nicolaus Copernicus', age: 70, IQ: 160 }, 
//   { name: 'Gottfried Leibniz', age: 70, IQ: 182 },
//   {name: 'William Sidis', age: 46, IQ: 200}
// ]

// const element = (
//   <ul>
//     {smartPeople.map((person, index) => (
//       <li key={index}>
//         <strong>Name:</strong> {person.name} ,  
//         <strong>Age:</strong> {person.age} ,  
//         <strong>IQ:</strong> {person.IQ}
//       </li>
//     ))}
//   </ul>
// );
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(element);
// ReactDOM.createRoot(document.getElementById('root')).render(element);

//---------------------------------Exercise 4.4---------------------------------------------------
// import { Card, Avatar } from 'antd';
// import "antd/dist/reset.css";
// const { Meta } = Card;

// const card = {
//   title: 'Elon Musk',
//   description: 'Elon Reeve Musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX', 
//   avatar: 'http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg',
//   cover: 'https://media.vanityfair.com/photos/574f453fbdf148e4205f29df/16:9/w_1200, h_630, c_limit/hive-contributor-profile-elon-musk.jpg'
// };

// const element = (
//   <div style={{ padding: '20px' }}>
//     <Card
//       title={card.title}
//       cover={<img alt="cover" src={card.cover} />}
//       extra={<Avatar src={card.avatar} />}
//     >
//       <Meta description={card.description} />
//     </Card>
//   </div>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(element);

//---------------------------------Exercise 4.5---------------------------------------------------
// const user = {
//   firstName: 'Elon',
//   lastName: 'Musk',
//   age: 49
// }

// const element = (
//   <div>
//       <h1>firstName: {user.firstName}</h1>
//       <h1>lastName: {user.lastName}</h1>
//       <h1>age: {user.age}</h1>
//   </div>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(element);

//---------------------------------Exercise 4.6---------------------------------------------------
// const divStyle = {
//   fontSize: '15px',
//   backgroundColor: '#d0f0c0',
//   border: '1px solid green',
//   padding: '10px',
// };

// const element = (
//   <div style={divStyle} >Green is the prime color of the world</div>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(element);


//---------------------------------Exercise 4.7---------------------------------------------------

const UserForm = () => {
  return (
    <form>
      <label>Enter a username:</label>
      <input />
    </form>
  );
}

//Renders the App component into a div with id 'root'
//ReactDOM.createRoot(document.getElementById('root')).render(<UserForm />);
//ReactDOM.render(<UserForm />, document.querySelector('#root'));
ReactDOM.createRoot(document.querySelector('#root')).render(<UserForm />);

reportWebVitals();