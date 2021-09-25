import Posts from "./comments/Comments";

const App = () => {
  return (
    <div>
      <nav className="nav_container">
        <span class="nav">Home</span>
        <span class="nav">Profile </span>
        <span class="nav"> Notifications </span>
      </nav>
      <div className="post_container"> <h1 className="header">E-sports Review </h1>
        <Posts
          commentsUrl="http://localhost:3004/comments"
          currentUserId="1"
        />
      </div>
      <footer className="footer">
        &#169; Copyrights by Angle sport reviews
      </footer>
    </div>
  );
};

export default App;