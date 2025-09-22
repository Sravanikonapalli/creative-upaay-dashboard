import React from "react";
import TaskCard from "./TaskCard";
import { Droppable } from "@hello-pangea/dnd";

export default function Column({ columnKey, title, taskIds = [], tasksById, filters }) {
  const filteredIds = taskIds.filter(id => {
    const t = tasksById[id];
    if (!t) return false;
    if (filters.search && !`${t.title} ${t.description}`.toLowerCase().includes(filters.search.toLowerCase())) return false;
    if (filters.category !== "All" && t.category !== filters.category) return false;
    if (filters.priority !== "All" && t.priority !== filters.priority) return false;
    return true;
  });

  return (
    <div className="column">
      <h3>{title} <span className="count">({filteredIds.length})</span></h3>
      <Droppable droppableId={columnKey}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`column-list ${snapshot.isDraggingOver ? "drag-over" : ""}`}
          >
            {filteredIds.map((id, index) => (
              <TaskCard key={id} task={tasksById[id]} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
