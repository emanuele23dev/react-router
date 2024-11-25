import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <header>
        <div className="nav">
          <a href="/">
            <img src="../src/assets/react.svg" alt="" />
          </a>
        </div>
        <NavMenu />
      </header>

      <main>
        <h1 className="title">React Blog Pages</h1>
        <img className="logo" src="../src/assets/react.svg" alt="" />
      </main>

      <Footer />
    </>
  );
}
