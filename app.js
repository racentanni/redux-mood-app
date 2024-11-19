// Define action types
const SET_MOOD = 'SET_MOOD';

// Define action creators
const setMood = (mood) => ({
    type: SET_MOOD,
    payload: mood
});

// Define initial state
const initialState = {
    mood: '(•_•)'
};

// Define reducer
const moodReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOOD:
            return {
                ...state,
                mood: action.payload
            };
        default:
            return state;
    }
};

// Create Redux store
const store = Redux.createStore(moodReducer);

// Define mood faces
const moods = {
    happy: '😊',
    sad: '😢',
    angry: '😠',
    surprised: '😲'
};

// Update DOM when state changes
store.subscribe(() => {
    const state = store.getState();
    document.getElementById('mood').innerText = state.mood;
});

// Add event listeners to buttons
document.querySelectorAll('.mood-button').forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.getAttribute('data-mood');
        if (mood) {
            store.dispatch(setMood(moods[mood]));
        } else {
            const randomMood = Object.values(moods)[Math.floor(Math.random() * Object.values(moods).length)];
            store.dispatch(setMood(randomMood));
        }
    });
});