import React from 'react'

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <div className={'list-item'}>
      <label htmlFor="title" area-label={title}>
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
        />
      </label>
    </div>
  )
}