import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

// CREATING SLICE
export const budgetsSlice = createSlice({
    name: "budgets",
    initialState: initialState,
    reducers: {
        editBudget: (state, action) => {
            state.map(budget => {
                if (budget.category === action.payload.category) {
                  return budget.amount = action.payload.amount;
                }
            })
        }
    }
})

// SELECTORS
export const selectBudgets = (state) => state.budgets;

// EXPORTING ACTIONS
export const { editBudget } = budgetsSlice.actions;

// EXPORTING REDUCERS
export default budgetsSlice.reducer;