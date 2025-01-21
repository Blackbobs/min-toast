// src/utils/ToastManager.ts
class ToastManager {
  private toast: { type: "success" | "error" | "warning" | "info", message: string, description: string } | null = null;
  private toastTimeout: ReturnType<typeof setTimeout> | null = null;

  // To notify React to update the state
  private onToastCleared?: () => void;

  // Attach the callback function to notify React when the toast disappears
  setOnToastClearedCallback(callback: () => void) {
    this.onToastCleared = callback;
  }

  showToast(type: "success" | "error" | "warning" | "info", message: string, description: string) {
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }

    this.toast = { type, message, description };

    // Automatically hide the toast after 5 seconds
    this.toastTimeout = setTimeout(() => {
      this.hideToast();
    }, 5000);
  }

  hideToast() {
    this.toast = null;
    if (this.onToastCleared) {
      this.onToastCleared(); // Notify React to clear the toast state
    }
  }

  getToast() {
    return this.toast;
  }
}

const toastManager = new ToastManager();
export default toastManager;
