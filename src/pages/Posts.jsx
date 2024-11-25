export default function Posts() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="../src/assets/react.svg" alt="" />
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">Chi siamo</a>
          <a href="posts">Blog Posts</a>
        </nav>
      </header>

      <main>
        <h1>Posts Page</h1>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} React Router App</p>
      </footer>
    </>
  );
}
