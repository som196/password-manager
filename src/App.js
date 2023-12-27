import './App.css'
import AddPasswordsControls from './AddPasswordsControl/index'

const App = () => (
  <div className="main-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
      alt="app logo"
      className="app-logo"
    />
    <div>
      <AddPasswordsControls />
    </div>
  </div>
)
export default App
