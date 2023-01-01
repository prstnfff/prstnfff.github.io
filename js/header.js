class Header extends HTMLElement {
    constructor() {
        super();
        this.pageID = this.getAttribute('data-page-id')
    }

    connectedCallback(){

        let indexClassDec = this.pageID === 'index' ? 'active-page-link' : ''
        let expClassDec = this.pageID === 'experience' ? 'class = "active-page-link"' : ''
        let projectsClassDec = this.pageID === 'projects' ? 'class = "active-page-link"' : ''

        this.innerHTML= 
            `<header>
                <a class = "nameplate ${indexClassDec}" href = 'docs/index.html'>Preston White</a>
                <a ${expClassDec} href = 'docs/experience.html'>Experience</a>
                <a ${projectsClassDec} href = 'docs/projects.html'>Projects</a>
            </header>`
    }
}

customElements.define('header-component', Header);