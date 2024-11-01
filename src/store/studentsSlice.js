import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
};

const studentsSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    add: (state, action) => {
      state.students.push(action.payload);
    },
    remove: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
    clear: (state) => {
      state.students = [];
    },
    update: (state, action) => {
      state.students = state.students.map((student) => {
        if (student.id === action.payload.id) {
          student = action.payload;
        }
        return student;
      });
    },
  },
});

export const { add, remove, clear, update } = studentsSlice.actions;

export default studentsSlice.reducer;
