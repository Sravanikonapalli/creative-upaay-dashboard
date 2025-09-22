import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksReducer";

export default function TaskCard({ task, index }) {
  const dispatch = useDispatch();

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="task-header">
            <strong>{task.title}</strong>
            <div>
              <button className="icon-btn" onClick={() => dispatch(deleteTask(task.id))}>✕</button>
            </div>
          </div>
          <p className="task-desc">{task.description}</p>
          <div className="task-meta">
            <span className={`badge priority-${task.priority}`}>{task.priority}</span>
            <span className="badge cat">{task.category}</span>
          </div>
        </div>
      )}
    </Draggable>
  );
}
