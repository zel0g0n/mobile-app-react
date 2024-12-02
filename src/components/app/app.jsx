import Header from "../header/header"
import Content from "../content/content"
import User from "../user/user"
import './app.scss'
const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header></Header>
        <main>
          <Content></Content>
          <User></User>
        </main>
      </div>
    </div>
  )
}

export default App