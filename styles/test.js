function Search() {
  return (
    <div>
      <input type="text" /> <button type="submit">Wyszukaj mnie</button>
    </div>
  );
}

class Search2 extends Component {
  render() {
    return (
      <div>
        <input type="text" /> <button type="submit">Wyszukaj mnie</button>
      </div>
    );
  }
}

ReactDOM.render(<Search2 />, document.getElementById("app"));

//! ---------------------------------------------------------
function LikeBox() {
  return (
    <>
      <span>100 like'ów</span>
      <br />
      <button type="button">Lubię to</button>
    </>
  );
}

//! -----------------------------
class Menu extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <a href="/">Strona główna</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/cennik">Cennik</a>
          </li>
          <li>
            <a href="/kontakt">Konakt</a>
          </li>
        </ul>
      </>
    );
  }
}

ReactDOM.render(<Menu />, document.getElementById("app"));
