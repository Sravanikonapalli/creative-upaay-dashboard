import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksReducer";

export default function AddTaskModal({ onClose, initialStatus = "todo" }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [category, setCategory] = useState("General");
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title required");
    dispatch(addTask({ title, description, status: initialStatus, priority, category }));
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Add Task</h3>
        <form onSubmit={submit} className="modal-form">
          <label>Title</label>
          <input value={title} onChange={e=>setTitle(e.target.value)} />
          <label>Description</label>
          <textarea value={description} onChange={e=>setDescription(e.target.value)} />
          <div className="row">
            <div>
              <label>Priority</label>
              <select value={priority} onChange={e=>setPriority(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label>Category</label>
              <select value={category} onChange={e=>setCategory(e.target.value)}>
                <option>General</option>
                <option>Work</option>
                <option>Personal</option>
                <option>Urgent</option>
              </select>
            </div>
          </div>
          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button className="btn-primary" type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
