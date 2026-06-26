import { renderHome } from "../pages/home";
import { renderChat } from "../pages/chat";
import { renderAbout } from "../pages/about";

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