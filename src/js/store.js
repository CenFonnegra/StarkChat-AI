export const store = {
    messages: []
};

export function addMessage(message) {
    store.messages.push(message);
 //   console.log("Mensaje agregado:", store.messages);
}

export function clearMessages() {
    store.messages.length = 0;
}