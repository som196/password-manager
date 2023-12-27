import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import PasswordsContainer from '../PasswordsContainer/index'

const colorList = ['yellow', 'green', 'orange', 'brown', 'blue']

class AddPasswordsControls extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    latestList: [],
    showPassword: false,
    passwordsLengthZero: false,
  }

  listenWebsite = event => {
    this.setState({website: event.target.value})
  }

  listenUsername = event => {
    this.setState({username: event.target.value})
  }

  listenPassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {website, username, password, showPassword} = this.state
    const newItem = {id: uuidv4(), website, username, password, showPassword}
    this.setState(prevState => ({
      latestList: [...prevState.latestList, newItem],
    }))
  }

  noPasswordsView = () => {
    ;<div className="no-passwords-container">
      <div className="no-passwords-view-top-row">
        <div>
          <div className="password-count-container">
            <h1 className="your-passwd-heading">Your Passwords</h1>
            <p>0</p>
          </div>
        </div>
        <div className="search-icon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
          />
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-img"
      />
    </div>
  }

  deleteFunction = id => {
    const {latestList} = this.state
    const filteredList = latestList.filter(each => each.id !== id)
    this.setState({latestList: filteredList})
  }

  changeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {website, username, password, latestList} = this.state

    let {passwordsLengthZero} = this.state
    console.log(Math.random() * 5)

    if (latestList.length === 0) {
      passwordsLengthZero = true
    } else {
      passwordsLengthZero = false
    }
    let content

    if (passwordsLengthZero) {
      content = (
        <div className="no-passwords-container">
          <div className="no-passwords-view-top-row">
            <div>
              <div className="password-count-container">
                <h1 className="your-passwd-heading">Your Passwords</h1>
                <p>0</p>
              </div>
            </div>
            <div className="search-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input type="search" placeholder="Search" />
            </div>
          </div>
          <div className="show-passwd-container">
            <input type="checkbox" id="show-password" />
            <label htmlFor="show-password" onClick={this.changeShowPassword}>
              Show passwords
            </label>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-passwords-img"
          />
          <p>No Passwords</p>
        </div>
      )
    } else {
      content = (
        <div className="no-passwords-container">
          <div className="no-passwords-view-top-row">
            <div>
              <div className="password-count-container">
                <h1 className="your-passwd-heading">Your Passwords</h1>
                <p>{latestList.length}</p>
              </div>
            </div>
            <div className="search-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input type="search" placeholder="Search" />
            </div>
          </div>
          <div className="show-passwd-container">
            <input type="checkbox" id="show-password" />
            <label htmlFor="show-password">Show passwords</label>
          </div>
          <ul className="unordered-list-passwords">
            {latestList.map(eachItem => (
              <PasswordsContainer
                eachItem={eachItem}
                key={eachItem.id}
                colorList={colorList}
                deleteFunction={this.deleteFunction}
              />
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div>
        <div className="add-password-container">
          <form className="add-password-form" onSubmit={this.submitForm}>
            <h1 className="add-new-password-heading">Add New Password</h1>
            <div className="website-details-container">
              <label htmlFor="cheese">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-image"
                />
              </label>

              <input
                id="cheese"
                type="text"
                placeholder="Enter Website"
                className="input-text"
                onChange={this.listenWebsite}
                value={website}
              />
            </div>
            <div className="username-details-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="username-image"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input-text"
                onChange={this.listenUsername}
                value={username}
              />
            </div>
            <div className="password-details-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="password-image"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input-text"
                onChange={this.listenPassword}
                value={password}
              />
            </div>
            <div className="add-button-container">
              <button type="submit" className="submit-button">
                Add
              </button>
            </div>
          </form>
          <div className="password-manager-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-image"
            />
          </div>
        </div>
        <div>{content}</div>
      </div>
    )
  }
}
export default AddPasswordsControls
