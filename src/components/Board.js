import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Column from "./Column";
import AddTaskModal from "./AddTaskModal";
import FilterBar from "./FilterBar";
import { DragDropContext } from "@hello-pangea/dnd";
import { moveTask } from "../redux/tasksReducer";
import { FaPlus } from "react-icons/fa";

const columns = [
  { key: "todo", title: "To Do" },
  { key: "inprogress", title: "On Progress" },
  { key: "done", title: "Done" },
];

export default function Board() {
  const [showAdd, setShowAdd] = useState(false);
  const store = useSelector(state => state.tasks);
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    // If same column and same index -> do nothing
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;
    dispatch(moveTask({
      id: draggableId,
      sourceStatus: source.droppableId,
      destStatus: destination.droppableId,
      destIndex: destination.index
    }));
  };

  return (
    <div className="board-container">
      <div className="board-controls">
        <button className="btn-primary" onClick={() => setShowAdd(true)}><FaPlus/> Add Task</button>
        <FilterBar />
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns">
          {columns.map(col => (
            <Column
              key={col.key}
              columnKey={col.key}
              title={col.title}
              taskIds={store.order[col.key]}
              tasksById={store.byId}
              filters={filters}
            />
          ))}
        </div>
      </DragDropContext>

      {showAdd && <AddTaskModal onClose={() => setShowAdd(false)} initialStatus="todo" />}
    </div>
  );
}
