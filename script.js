const rootElement = document.getElementById("root");

// const Message = props => {
//   if (!props.children) {
//     return <p>No Text!</p>;
//   }
//   return <p>{props.children}</p>;
// };
// const element = (
//   <div className="container">
//     <Message children={null} />
//     <Message children="What's up!" />
//   </div>
// );

// ReactDOM.render(element, rootElement);
function tick() {
  const time = new Date().toLocaleTimeString();
  const elem = <div> It is {time}</div>;
  ReactDOM.render(elem, rootElement);
}

setTimeout(function go() {
  tick();
  setTimeout(go, 1000);
}, 1000);
