import { sendMessage, renderMessages } from "../js/chat";

export function renderChat() {

    const view = document.querySelector("#view");

    view.innerHTML = `

    <div class="chat-app">

        <header class="chat-header">

            <div class="logo">
                ⚡ <span>STARKCHAT AI</span>
            </div>

            <div class="status">

                <span class="status-dot"></span>

                Tony Stark Online

            </div>

        </header>

        <main
            id="chat-box"
            class="chat-box">
        </main>

        <footer class="chat-footer">

            <input
                id="messageInput"
                type="text"
                placeholder="Pregúntale cualquier cosa a Tony..."
            >

            <button id="sendBtn">

                ➜

            </button>

        </footer>

    </div>

    `;

    const input = document.querySelector("#messageInput");
    const btn = document.querySelector("#sendBtn");

    renderMessages();

    btn.addEventListener("click", () => {

        const text = input.value.trim();

        if (!text) return;

        sendMessage(text);

        input.value = "";

    });

    input.addEventListener("keydown", e => {

        if (e.key === "Enter") {

            btn.click();

        }

    });

}