
import './App.css'
import { List } from './Components/List'
import './Components/styles.scss'

function App() {

  return (
    <div>
      <List items={[{title: "title1", text: "text1text1text1"}, {title: "title2", text: "text2text2text2"}]}></List>
    </div>
  )
}

export default App
