import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      //remove the last message if there are more than 20 messages
      state.messages.splice(20, 1);

      //add the new message to the beginning of the array
      state.messages.unshift(action.payload);
    },
  },
});
export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
