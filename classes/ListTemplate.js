export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const element = document.createElement('li');
        const title = document.createElement('h4');
        const text = document.createElement('p');
        title.innerText = heading;
        text.innerText = item.format();
        element.append(title, text);
        if (position === 'start') {
            this.container.prepend(element);
        }
        else {
            this.container.append(element);
        }
    }
}
