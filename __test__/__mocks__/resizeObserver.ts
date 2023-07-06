export class MockResizeObserver implements ResizeObserver {
  private callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  observe = jest.fn();

  unobserve = jest.fn();

  disconnect = jest.fn();

  mockResize() {
    this.callback([], this);
  }
}
