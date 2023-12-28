import { writable } from 'svelte/store';
import { auth } from '/src/firebase/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

// Function to get userId from localStorage
function getUserIdFromLocalStorage() {
	return localStorage.getItem('userId');
}

// Create a writable store for user information
export const userId = writable(getUserIdFromLocalStorage());

onAuthStateChanged(auth, (user) => {
	if (user) {
		// If a user is logged in, set the user information to local storage
		localStorage.setItem('userId', user.uid);
		userId.set(user.uid);
	} else {
		// If no user is logged in, clear the user information from local storage
		localStorage.removeItem('userId');
		userId.set(null);
	}
});
