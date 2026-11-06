
function Home(props) {
  return (
    <main id="home">
      <h2>Home Page</h2>
      <p>Hello, {props.name}!</p>
      <p>Course: {props.course}</p>
      <p>This is my first React application.</p>
    </main>
  );
}

export default Home;
