import { createSelector } from 'reselect';

// Selector to get the userId from state
const selectUserId = (state) => state.user?.userId;

// Selector to get the authToken from state
const selectAuthToken = (state) => state.user?.authToken;

// Selector to get the parts state from Redux state
const selectPartsState = (state) => state.parts || {};

// Memoized selector for parts data
const selectParts = createSelector(
    [selectPartsState],
    (partsState) => {
        // Add a fallback to an empty array if partsState or partsState.parts is undefined
        return partsState.parts || [];
    }
);

// Memoized selector for loading state
const selectPartsLoading = createSelector(
    [selectPartsState],
    (partsState) => partsState.loading || false
);

// Memoized selector for error state
const selectPartsError = createSelector(
    [selectPartsState],
    (partsState) => partsState.error || null
);

// Export the selectors
export { selectUserId, selectAuthToken, selectParts, selectPartsLoading, selectPartsError };
