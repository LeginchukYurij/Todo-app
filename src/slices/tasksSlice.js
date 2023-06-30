import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  tasksCount: 0,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,

  reducers: {
    getAll: (state, action) => {
      state.tasks = action.payload;
      state.tasksCount = action.payload.length;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.tasksCount = state.tasks.length;
    },
  },
});

export const { getAll, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
