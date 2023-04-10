const TaskList = props => {
  const {tagInfo, tagsList, tagging} = props
  const noTask = () => {
    console.log('')
    return (
      <div>
        <p>No Task Added Yet</p>
      </div>
    )
  }

  const renderList = () => {
    console.log('')
    return (
      <div>
        {tagInfo.map(tag => (
          <div key={tag.id}>
            <h1>{tag.task}</h1>
            <button type="button">{tag.tag}</button>
          </div>
        ))}
      </div>
    )
  }

  const specificTag = event => {
    tagging(event.target.value)
  }

  return (
    <div>
      <h1>Tags</h1>
      {tagsList.map(eachTag => (
        <button
          type="button"
          key={eachTag.optionId}
          value={eachTag.displayText}
          onClick={specificTag}
        >
          {eachTag.displayText}
        </button>
      ))}
      <h1>Tasks</h1>
      {tagInfo.length > 0 ? renderList() : noTask()}
    </div>
  )
}

export default TaskList
