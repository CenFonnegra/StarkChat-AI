export function renderHome() {
    const view = document.querySelector("#view");

    view.innerHTML = `
        <h1>Home</h1>
        <p>Bienvenido a StarkChat AI</p>
    `;
}

import { sendMessage, renderMessages } from "./chat.js";

export function renderChat() {
    const view = document.querySelector("#view");

    view.innerHTML = `
        <div class="chat-container">

            <div id="chat-box" class="chat-box"></div>

            <div class="chat-input">

                <input 
                    id="messageInput"
                    type="text"
                    placeholder="Escribe un mensaje..."
                    />

                <button id="sendBtn">Enviar</button>
            </div>
    
        </div>
    `;

    const input = document.querySelector("#messageInput");
    const btn = document.querySelector("#sendBtn");

    renderMessages();

    btn.addEventListener("click", () => {

        const text = input.value?.trim();

        if (!text) return;

        sendMessage(text);
        input.value = "";

    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            btn.click();
        }
    });
}

export function renderAbout() {
    const view = document.querySelector("#view");

    view.innerHTML = `
        <h1>About</h1>
        <p>Proyecto de chat con IA estilo Tony Stark</p>
    `;

}