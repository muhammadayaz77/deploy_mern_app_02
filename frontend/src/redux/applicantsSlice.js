import { createSlice } from "@reduxjs/toolkit";



const applicantsSlice = createSlice({
    name: "applicants",
    initialState : {
      applicants : [],
    },
    reducers: {
        setAllApplicants : (state, action) => {
            state.applicants = action.payload
        },
    }
})

export const { setAllApplicants } = applicantsSlice.actions;
export default applicantsSlice.reducer;