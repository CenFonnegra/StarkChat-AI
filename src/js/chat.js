import { store, addMessage } from "./store.js";

export  async function sendMessage(text) {

    //Se agrega el mensaje de usuario
    addMessage({
        role: "user",
        content: text
    });
    
    renderMessages();

    //Aqui muestra "Tony esta escribiendo..."
    showTyping();

    // Fetch para que ya se responda por medio de serverless function
    try {

        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: text
            })
        });

        if (!response.ok) {
            throw new Error("Error al comunicarse con la IA");
        }

        const data = await response.json();

        removeTyping();

        addMessage({
            role: "assistant",
            content: data.reply
        });

        renderMessages();

    } catch (error) {

        console.error(error);

        removeTyping();

        //En caso que falle Gemini se genera esta respuesta
        addMessage({
            role: "assistant",
            content: generateTonyResponse(text)
        });

        renderMessages();
    }

}

export function showTyping() {

    const box = document.querySelector("#chat-box");

    if (!box) return;

    box.innerHTML += `
        <div class="message assistant typing">
            Tony está escribiendo....
        </div>
    `;

    box.scrollTop = box.scrollHeight;
}

export function removeTyping() {

    const typing = document.querySelector(".typing");

    if (typing) {
        typing.remove();
    }
}

export function generateTonyResponse(text) {
    return `Hmm... "${text}". Suena interesante. Déjame pensar como genio multimillonario.`;
}

export function renderMessages() {

    const box = document.querySelector("#chat-box");

    if (!box) return;

    box.innerHTML = store.messages
    .map(msg => `
        <div class="message ${msg.role}">
            ${msg.content}
        </div>
    `)
    .join("");
        
     box.scrollTop = box.scrollHeight;
}