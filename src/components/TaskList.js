import TaskShow from "./TaskShow";
function TaskList({tasks,onDelete,onUpdate}) {
  return (
    <div className="task-list">
      {tasks.map((task,index) => {
        return <TaskShow onDelete={onDelete} key={index} task={task} onUpdate={onUpdate}/>
      })}
    </div>
  )
}

export default TaskList;
