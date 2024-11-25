export default function Home() {
  return (
    <>
      <header>
        <div className="nav">
          <a href="/">
            <img src="../src/assets/react.svg" alt="" />
          </a>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">Chi siamo</a>
          <a href="posts">Blog Posts</a>
        </nav>
      </header>

      <main>
        <h1>React Blog Pages</h1>
        <img className="logo" src="../src/assets/react.svg" alt="" />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} React Router App</p>
      </footer>
    </>
  );
}
