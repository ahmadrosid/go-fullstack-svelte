import { writable } from 'svelte/store';

export type Routes = '' | '/' | '/login' | '/register' | '/dashboard';
export const route = writable<Routes>('/dashboard');
