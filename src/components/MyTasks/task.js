import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TaskList from '../TaskList/list'

class MyTasks extends Component {
  state = {
    tag: 'Health',
    task: '',
    tagInfo: [],
  }

  changeTag = event => {
    this.setState({tag: event.target.value})
  }

  saveText = event => {
    this.setState({task: event.target.value})
  }

  displayTaskDetails = event => {
    event.preventDefault()
    const {tag, task} = this.state
    const tagInfo = {id: uuidv4(), task, tag}
    this.setState(prevState => ({
      tagInfo: [...prevState.tagInfo, tagInfo],
    }))
  }

  render() {
    const {tagsList} = this.props
    const {tag, tagInfo} = this.state
    return (
      <div>
        <form onSubmit={this.displayTaskDetails}>
          <h1>Create a task!</h1>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            placeholder="Enter the task here"
            id="task"
            onChange={this.saveText}
          />
          <br />
          <label htmlFor="tags">Tags</label>
          <select id="tags" value={tag} onChange={this.changeTag}>
            {tagsList.map(tags => (
              <option value={tag.optionId} key={tags.optionId}>
                {tags.displayText}
              </option>
            ))}
          </select>
          <br />
          <button type="submit">Add to task</button>
        </form>
        <TaskList tagInfo={tagInfo} tagsList={tagsList} />
      </div>
    )
  }
}
export default MyTasks
