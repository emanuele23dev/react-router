export default function Posts() {
  return (
    <>
      <header>
        <div className="logo">LOGO</div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">Chi siamo</a>
          <a href="posts">Blog Posts</a>
        </nav>
      </header>

      <main>
        <h1>Home Page</h1>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} React Router App</p>
      </footer>
    </>
  );
}
