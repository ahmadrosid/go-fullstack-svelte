import { getContext, onDestroy, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export type ToastMode = 'success' | 'error' | 'info';

export type ToastType = {
	id: string;
	title: string;
	message: string;
    type: ToastMode;
};

export class ToastState {
	private toastsStore: Writable<ToastType[]>;
	private toastToTimeoutMap: Map<string, number>;

	constructor() {
		this.toastsStore = writable<ToastType[]>([]);
		this.toastToTimeoutMap = new Map<string, number>();

		onDestroy(() => {
			for (const timeout of this.toastToTimeoutMap.values()) {
				clearTimeout(timeout);
			}
			this.toastToTimeoutMap.clear();
		});
	}

	subscribe(run: (value: ToastType[]) => void, invalidate?: (value?: ToastType[]) => void) {
		return this.toastsStore.subscribe(run, invalidate);
	}

	add(title: string, message: string, type: ToastMode = 'info', durationMs = 5000) {
		const id = crypto.randomUUID();
		this.toastsStore.update(toasts => [...toasts, { id, title, message, type }]);

		this.toastToTimeoutMap.set(
			id,
			setTimeout(() => {
				this.remove(id);
			}, durationMs) as unknown as number
		);
	}

	remove(id: string) {
		const timeout = this.toastToTimeoutMap.get(id);
		if (timeout) {
			clearTimeout(timeout);
			this.toastToTimeoutMap.delete(id);
		}
		this.toastsStore.update(toasts => toasts.filter(toast => toast.id !== id));
	}
}

const TOAST_KEY = Symbol('TOAST');

export function setToastState() {
	return setContext(TOAST_KEY, new ToastState());
}

export function getToastState() {
	return getContext<ReturnType<typeof setToastState>>(TOAST_KEY);
}