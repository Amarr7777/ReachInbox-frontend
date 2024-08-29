import { createSlice } from '@reduxjs/toolkit';

const emailSlice = createSlice({
  name: 'email',
  initialState: {
    threadId: null,
    fromName: null,
    fromEmail: null,
    sentAt: null,
  },
  reducers: {
    setThreadId: (state, action) => {
      state.threadId = action.payload;
    },
    setEmailDetails: (state, action) => {
      state.fromName = action.payload.fromName;
      state.fromEmail = action.payload.fromEmail;
      state.sentAt = action.payload.sentAt;
    },
    clearEmailDetails: (state) => {
      state.fromName = null;
      state.fromEmail = null;
    },
  },
});

export const { setThreadId, setEmailDetails, clearEmailDetails } = emailSlice.actions;

export default emailSlice.reducer;