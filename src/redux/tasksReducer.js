import { v4 as uuidv4 } from "uuid";

// Sample seeded tasks
const t1 = uuidv4();
const t2 = uuidv4();
const t3 = uuidv4();
const t4 = uuidv4();
const t5 = uuidv4();
const t6 = uuidv4();

const initialState = {
  byId: {
    [t1]: {
      id: t1,
      title: "Brainstorming",
      description: "Team brainstorming to generate app ideas.",
      status: "todo",
      priority: "high",
      category: "Work",
    },
    [t2]: {
      id: t2,
      title: "Research",
      description: "Gather insights from competitors and users.",
      status: "todo",
      priority: "medium",
      category: "Work",
    },
    [t3]: {
      id: t3,
      title: "Wireframes",
      description: "Design low-fidelity wireframes for the new flow.",
      status: "inprogress",
      priority: "low",
      category: "Design",
    },
    [t4]: {
      id: t4,
      title: "UI Kit Setup",
      description: "Set up typography, colors, and spacing tokens.",
      status: "inprogress",
      priority: "medium",
      category: "Design",
    },
    [t5]: {
      id: t5,
      title: "Design System",
      description: "Adapt UI from Figma for consistency.",
      status: "done",
      priority: "high",
      category: "Design",
    },
    [t6]: {
      id: t6,
      title: "Backend API",
      description: "Create endpoints for tasks and users.",
      status: "done",
      priority: "medium",
      category: "Work",
    },
  },
  order: {
    todo: [t1, t2],
    inprogress: [t3, t4],
    done: [t5, t6],
  },
};

// Action Types
const ADD_TASK = "ADD_TASK";
const UPDATE_TASK = "UPDATE_TASK";
const DELETE_TASK = "DELETE_TASK";
const MOVE_TASK = "MOVE_TASK";

// Action Creators
export const addTask = ({
  title,
  description,
  status = "todo",
  priority = "low",
  category = "General",
}) => ({
  type: ADD_TASK,
  payload: { id: uuidv4(), title, description, status, priority, category },
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const moveTask = ({ id, sourceStatus, destStatus, destIndex }) => ({
  type: MOVE_TASK,
  payload: { id, sourceStatus, destStatus, destIndex },
});


// Reducer
export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      const t = action.payload;
      return {
        ...state,
        byId: { ...state.byId, [t.id]: t },
        order: {
          ...state.order,
          [t.status]: [t.id, ...state.order[t.status]],
        },
      };
    }

    case UPDATE_TASK: {
      const t = action.payload;
      return {
        ...state,
        byId: { ...state.byId, [t.id]: { ...state.byId[t.id], ...t } },
      };
    }

    case DELETE_TASK: {
      const id = action.payload;
      const { [id]: removed, ...rest } = state.byId;

      const newOrder = Object.fromEntries(
        Object.entries(state.order).map(([k, arr]) => [
          k,
          arr.filter((i) => i !== id),
        ])
      );

      return {
        ...state,
        byId: rest,
        order: newOrder,
      };
    }

    case MOVE_TASK: {
      const { id, sourceStatus, destStatus, destIndex } = action.payload;

      // remove from source
      const sourceArr = Array.from(state.order[sourceStatus]);
      const idx = sourceArr.indexOf(id);
      if (idx > -1) sourceArr.splice(idx, 1);

      // insert into destination
      const destArr = Array.from(state.order[destStatus]);
      const insertAt = destIndex ?? destArr.length;
      destArr.splice(insertAt, 0, id);

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: { ...state.byId[id], status: destStatus },
        },
        order: {
          ...state.order,
          [sourceStatus]: sourceArr,
          [destStatus]: destArr,
        },
      };
    }

    default:
      return state;
  }
}
