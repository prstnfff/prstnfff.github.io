class Head extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML= 
            `<header>
                <a class = 'nameplate' href = './index.html'>Preston White</a>
                <a href = './experience.html'>Experience</a>
                <a href = './projects.html'>Projects</a>
            </header>`
    }
}

customElements.define('head-component', Head);