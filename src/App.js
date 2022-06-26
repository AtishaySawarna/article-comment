import Comments from "./comments/Comments";
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Card
        img="https://images.unsplash.com/photo-1583695477819-357b45d15825?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJvbnRlbmQlMjBwcm9qZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        title="Article-1"
        description="HTML/CSS"
        
      />

      <Card
        img ="https://images.unsplash.com/photo-1593720218365-b2076cfdefee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZnJvbnRlbmQlMjBwcm9qZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        title="Article-2"
        description="CSS/BOOTSTRAP"
      />

      <Card
        img="https://images.unsplash.com/photo-1593720218746-e13e4a422a3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyb250ZW5kJTIwcHJvamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        title="Article-3"
        description="REACT"
      />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <Comments
        commentsUrl="http://localhost:3000/comments"
        currentUserId="1"
      />
    </div>
  );
}
  

export default App;
