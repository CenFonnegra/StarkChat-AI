
export function renderHome() {
    const view = document.querySelector("#view");

    view.innerHTML = `
        <section class="home-page">

            <div class="hero">

                <h1>⚡ STARKCHAT AI</h1>

                <p>
                    Conversa con la inteligencia de Tony Stark.
                    Haz preguntas, pide consejos o simplemente disfruta
                    de una conversación con el genio de Marvel.
                </p>

                <button id="startChat">
                    Comenzar conversación
                </button>

            </div>

        </section>
    `;

    document.querySelector("#startChat").addEventListener("click", () => {
        window.location.hash = "#chat";
    });
}