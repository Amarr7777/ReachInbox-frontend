import { createSlice } from '@reduxjs/toolkit';

const emailSlice = createSlice({
  name: 'email',
  initialState: {
    threadId: null,
    fromName: null,
    fromEmail: null,
  },
  reducers: {
    setThreadId: (state, action) => {
      state.threadId = action.payload;
    },
    setEmailDetails: (state, action) => {
      state.fromName = action.payload.fromName;
      state.fromEmail = action.payload.fromEmail;
    },
    clearEmailDetails: (state) => {
      state.fromName = null;
      state.fromEmail = null;
    },
  },
});

export const { setThreadId, setEmailDetails, clearEmailDetails } = emailSlice.actions;

export default emailSlice.reducer;