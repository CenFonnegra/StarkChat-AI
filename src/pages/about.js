
export function renderAbout() {

    const view = document.querySelector("#view");

    view.innerHTML = `

        <section class="about-page">

            <h1>Acerca del proyecto</h1>

            <p>
                StarkChat AI es una aplicación desarrollada con
                JavaScript, Vite y la API de Gemini.
            </p>

            <div class="about-card">

                <h3>Tecnologías</h3>

                <ul>

                    <li>HTML5</li>

                    <li>CSS3</li>

                    <li>JavaScript ES6</li>

                    <li>Vite</li>

                    <li>Gemini API</li>

                    <li>Vercel Serverless Functions</li>

                </ul>

            </div>

        </section>

    `;
}