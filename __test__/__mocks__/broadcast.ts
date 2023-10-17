/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
import 'jest-canvas-mock';

class MockBroadcastChannel {
  name: string;

  listeners: { type: string; listener: EventListener }[] = [];

  messages: any[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addEventListener(type: string, listener: EventListener) {
    this.listeners.push({ type, listener });
  }

  removeEventListener(type: string, listener: EventListener) {
    this.listeners = this.listeners.filter(
      l => l.type === type && l.listener === listener,
    );
  }

  postMessage(message: any) {
    this.messages.push(message);
  }

  dispatchMessage(message: any) {
    this.listeners.forEach(l => {
      if (l.type === 'message') {
        l.listener({ data: message } as MessageEvent);
      }
    });
  }

  close() {
    // No-op
  }
}

export { MockBroadcastChannel };
