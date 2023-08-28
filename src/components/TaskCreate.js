import { useState } from "react";

function TaskCreate({onCreate}) {

  const [title,setTitle] = useState('');
  const [taskDesc,setTaskDesc] = useState('')

  const handleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
    setTitle('');
    setTaskDesc('');
  };

  return (
    <div className="task-create">
      <h3>Lütfen Task Ekleyiniz!</h3>
      <form className="task-form">
        <label className="task-label">Baslık</label>
        <input className="task-input" value={title} onChange={handleChange} />
        <label className="task-label">Task Giriniz</label>
        <textarea className="task-input" value={taskDesc} onChange={handleTaskChange} rows={5} />
        <button className="task-button" onClick={handleSubmit}>Oluştur</button>
      </form>
    </div>
  );
}

export default TaskCreate;
