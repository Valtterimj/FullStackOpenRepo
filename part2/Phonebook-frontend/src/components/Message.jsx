const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  const messageStyle = {
    color: 'green',
    background: 'lightgrey',
    fontsize: 20,
    borderstyle: 'solid',
    borderradius: 5,
    padding: 10,
    marginbottom: 10,
  }

  return (
    <div style={messageStyle} className="message">
      {message}
    </div>
  )
}

export default Notification