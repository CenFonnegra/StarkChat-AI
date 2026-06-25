import { store, addMessage } from "./store.js";

export function sendMessage(text) {

    addMessage({
        role: "user",
        content: text
    });
    
    renderMessages();

    setTimeout(() => {

        addMessage({
            role: "assistant",
            content: generateTonyResponse(text)
        });

         renderMessages();

    }, 800);
}

export function generateTonyResponse(text) {
    return `Hmm... "${text}". Suena interesante. Déjame pensar como genio multimillonario.`;
}

export function renderMessages() {

    const box = document.querySelector("#chat-box");

    if (!box) return;

    //Debug
   // console.log("STORE:", store.messages);

    box.innerHTML = store.messages.map(msg => `
        <div class="message ${msg.role}">
            ${msg.content}
        </div>
    `).join("");
        
       box.scrollTop = box.scrollHeight;
}