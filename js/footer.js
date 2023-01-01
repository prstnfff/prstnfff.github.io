class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML= 
            `<footer>
                    <a href="mailto:prstnwhite@gmail.com" target="_blank"><img class='icon' src='icons/mail.png' alt="prstnwhite@gmail.com"></a> 
                    <a href="https://www.linkedin.com/in/preston-white-b19623101/" target="_blank"><img class='icon' src='icons/linkedin.png' alt="link to LinkedIn"> </a>
                    <a href="https://github.com/prstnfff" target="_blank"><img class='icon' src='.icons/github.png' alt='link to GitHub'></a>
            </footer>`
    }
}

customElements.define('footer-component', Footer);