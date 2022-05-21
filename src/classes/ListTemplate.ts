import { HasFormatter } from '../interfaces/HasFormatter.js';

export class ListTemplate {
    constructor(private container: HTMLUListElement){}

    render(item: HasFormatter, heading: string, position: 'start' | 'end'){
        const element = document.createElement('li');
        const title = document.createElement('h4');
        const text = document.createElement('p');

        title.innerText = heading;
        text.innerText = item.format();
        element.append(title, text);

        if (position === 'start'){
            this.container.prepend(element);
        } else {
            this.container.append(element);
        };
    };
};