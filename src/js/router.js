import { renderHome, renderChat, renderAbout } from "./views.js";

const routes = {
    "/home": renderHome,
    "/chat": renderChat,
    "/about": renderAbout
};

export function router() {
    const path = window.location.pathname;

    const view = routes[path] || renderHome;

    view();
}