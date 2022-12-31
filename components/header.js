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
                <a class = "nameplate ${indexClassDec}" href = './index.html'>Preston White</a>
                <a ${expClassDec} href = './experience.html'>Experience</a>
                <a ${projectsClassDec} href = './projects.html'>Projects</a>
            </header>`
    }
}

customElements.define('header-component', Header);