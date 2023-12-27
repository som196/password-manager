import './index.css'

const PasswordsContainer = props => {
  const {eachItem, colorList, deleteFunction} = props
  const {id, website, username, password, showPassword} = eachItem

  const stars = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  // id: uuidv4(), website, username, password, showPassword

  const deleteLog = () => {
    deleteFunction(id)
  }

  return (
    <li>
      <p>{website[0]}</p>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        {showPassword ? <p>{password}</p> : <p>{stars}</p>}
      </div>
      <button type="button" onClick={deleteLog}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordsContainer
