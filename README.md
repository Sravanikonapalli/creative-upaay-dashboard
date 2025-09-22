# Creative Upaay Dashboard (React + Redux)

This project is a functional **Task Management Dashboard UI** built with React.js, based on the provided Figma design.  
It replicates a Kanban-style task board (To Do, In Progress, Done) and includes features like task creation, filtering, drag-and-drop, and persistence with Local Storage.  

---
### LIVE URL
- [click here to view thee live deployed app](https://creative-upaay-dashboard-seven.vercel.app/) 

##  Project Overview
- Pixel-perfect replication of the Figma dashboard design.  
- Kanban board with **3 columns**:  
  - To Do  
  - In Progress  
  - Done  
- **Task management features**:
  - Add tasks (title, description, category, priority).  
  - Move tasks between columns.  
  - Filter tasks by category, priority, or due date.  
- **State management** with Redux.  
- **Persistence** using Local Storage (tasks remain after refresh).  
- **Drag-and-drop** functionality using `@hello-pangea/dnd` (community fork of `react-beautiful-dnd`).  

---

##  Technologies Used
- **React.js** – Component-based UI.  
- **Redux + React-Redux** – Global state management.  
- **Local Storage** – Persistence of tasks after page refresh.  
- **UI Styling** – Material-UI.  
- **@hello-pangea/dnd** – Drag-and-drop support.  
- **uuid** – Unique ID generation for tasks.  

---

##  Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Sravanikonapalli/creative-upaay-dashboard.git
   cd creative-upaay-functional dashboard ui/frontend
Install dependencies:

```bash
npm install
```
Start the development server:

```bash
npm start
```
Open in browser:

```bash
http://localhost:3000
```

### Known Limitations
- Currently uses Local Storage → tasks are saved only in the browser (no backend persistence).

- Filtering is basic and may need enhancements for large datasets.

- No authentication or user management.

- Mobile responsiveness may need additional fine-tuning depending on design.

- Drag-and-drop relies on @hello-pangea/dnd, which may have performance limits for very large boards.

## Deployment
Deployed this project in **Vercecl**


