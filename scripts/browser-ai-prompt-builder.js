console.log('browser-ai-prompt-builder.js loaded');

class BrowserAiPromptBuilder {
    constructor() {
        console.log('BrowserAiPromptBuilder() called');
    }

    showModal() {
        if (document.getElementById('browser-ai-prompt-builder-modal')) {
            let el = document.getElementById('browser-ai-prompt-builder-modal');
            el.classList.remove('hidden');
            el.classList.add('absolute');
        }
    }

    hideModal() {
        if (document.getElementById('browser-ai-prompt-builder-modal')) {
            let el = document.getElementById('browser-ai-prompt-builder-modal');
            el.classList.remove('absolute');
            el.classList.add('hidden');
        }
    }

    getSidebarElement() {
        let sidebarElement = document.createElement('div');
        sidebarElement.id = 'browser-ai-prompt-builder-sidebar';
        sidebarElement.className = 'browser-ai-prompt-builder-sidebar';
        sidebarElement.style = 'position: fixed; top: 50%; right: 16px; transform: translate(0px, -50%);';

        let buttonWrapperElement = document.createElement('div');
        buttonWrapperElement.className = 'flex gap-4';

        let buttonElement = document.createElement('button');
        buttonElement.className = 'btn relative btn-neutral';
        buttonElement.textContent = 'AI Prompt Builder';
        buttonElement.onclick = function() {
            window.browserAiPromptBuilder.showModal();
        };
        buttonWrapperElement.appendChild(buttonElement);

        sidebarElement.appendChild(buttonWrapperElement);

        return sidebarElement;
    }

    getModalElement() {
        let modalElement = document.createElement('div');
        modalElement.id = "browser-ai-prompt-builder-modal";
        modalElement.className = "hidden inset-0";
        modalElement.style = "position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.5);";

        let modalInnerElement = document.createElement('div');
        modalInnerElement.className = "fixed inset-0 bg-black/50 dark:bg-black/80";

        let modalInnerInnerElement = document.createElement('div');
        modalInnerInnerElement.className = "h-full w-full";

        let modalWrapperElement = document.createElement('div');
        modalWrapperElement.className = "p-4";

        let modalHeaderElement = document.createElement('div');
        modalHeaderElement.className = "flex items-center justify-between";

        let modalHeaderTitleElement = document.createElement('h2');
        modalHeaderTitleElement.className = "text-lg font-medium leading-6 text-token-text-primary";
        modalHeaderTitleElement.textContent = 'AI Prompt Builder Settings';
        modalHeaderElement.appendChild(modalHeaderTitleElement);

        let modalCloseButtonElement = document.createElement('button');
        modalCloseButtonElement.className = "btn btn-icon btn-neutral";
        modalCloseButtonElement.setAttribute('aria-label', 'Close');
        modalCloseButtonElement.setAttribute('type', 'button');
        modalCloseButtonElement.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`;
        modalCloseButtonElement.onclick = function() {
            window.browserAiPromptBuilder.hideModal();
        }
        modalHeaderElement.appendChild(modalCloseButtonElement);

        modalWrapperElement.appendChild(modalHeaderElement);

        modalInnerInnerElement.appendChild(modalWrapperElement);

        modalInnerElement.appendChild(modalInnerInnerElement);

        modalElement.appendChild(modalInnerElement);

        return modalElement;
    }

    getMainElement() {
        let mainElement = document.createElement('div');
        mainElement.id = 'browser-ai-prompt-builder-main';
        mainElement.className = 'browser-ai-prompt-builder-main';

        let sidebarElement = this.getSidebarElement();
        mainElement.appendChild(sidebarElement);

        let modalElement = this.getModalElement();
        mainElement.appendChild(modalElement);

        return mainElement;
    }

    render() {
        if (document.getElementById('browser-ai-prompt-builder-main')) {
            document.getElementById('browser-ai-prompt-builder-main').remove();
        }
        let mainElement = this.getMainElement();
        document.body.appendChild(mainElement);
    }
}

window.browserAiPromptBuilder = new BrowserAiPromptBuilder();
window.browserAiPromptBuilder.render();
