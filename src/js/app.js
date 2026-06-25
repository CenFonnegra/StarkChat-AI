import { router } from "./router.js";

export function initApp() {
    const app = document.querySelector("#app");

    app.innerHTML = `
        <header>
            <nav>
                <a href="/home" data-link>Home</a>
                <a href="/chat" data-link>Chat</a>
                <a href="/about" data-link>About</a>
            </nav>
        </header>

        <main id="view"></main>
    `;

    document.addEventListener("click", (e) => {
        const link = e.target.closest("a[data-link]");
        if (!link) return;

        e.preventDefault();

        window.history.pushState({}, "", link.getAttribute("href"));

        router();
    });

    
    router();
}