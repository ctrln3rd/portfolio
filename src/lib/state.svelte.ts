// Define your section types
export type Section = 'about' | 'projects';

// Use a class to manage state with Svelte 5 runes
class AppState {
	activeSection: Section = $state('about');

	toggle() {
		this.activeSection = this.activeSection === 'about' ? 'projects' : 'about';
	}
}

// Export a single instance to be used globally
export const appState = new AppState();
