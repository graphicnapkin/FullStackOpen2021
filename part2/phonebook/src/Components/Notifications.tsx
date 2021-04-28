import React from 'react'
import CSS from 'csstype'
import { NotificationProps } from '../types'

const Notifications = ({
  notification: { message, type },
}: NotificationProps) => {
  if (!message) return null
  return (
    <div style={styles[type]}>
      <div>{message}</div>
    </div>
  )
}

const baseStyle: CSS.Properties = {
  border: 'solid',
  backgroundColor: 'lightgray',
  padding: '10px',
  marginBottom: '10px',
}
const add: CSS.Properties = {
  ...baseStyle,
  borderColor: 'green',
}

const update: CSS.Properties = {
  ...baseStyle,
  borderColor: 'yellowgreen',
}

const remove: CSS.Properties = {
  ...baseStyle,
}

const error: CSS.Properties = {
  ...baseStyle,
  borderColor: 'red',
}

const styles = {
  add,
  update,
  remove,
  error,
}

export default Notifications
