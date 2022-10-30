import "./App.css"
import Card from "./Card"
import Logo from "./Logo"
import Note from "./Note"
import Title from "./Title"

const App = () => {
  return (
    <div className="App">
      <Logo />
      <Title>VSCode Snippets Tutorial</Title>
      <Card />
      <Note />
    </div>
  )
}

export default App
