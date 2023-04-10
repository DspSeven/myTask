const TaskList = props => {
  const {tagInfo, tagsList} = props
  // there is no task present
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

  return (
    <div>
      <h1>Tags</h1>
      {tagsList.map(eachTag => (
        <button type="button" key={eachTag.optionId}>
          {eachTag.displayText}
        </button>
      ))}
      <h1>Tasks</h1>
      {tagInfo.length > 0 ? renderList() : noTask()}
    </div>
  )
}
export default TaskList
