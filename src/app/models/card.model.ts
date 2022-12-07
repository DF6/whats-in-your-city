import { CardImage } from "./card-image.model";
import { CardOption } from "./card-option.model";

export class Card {

    public content?: string = '';
    public image?: CardImage = {
        url: '',
        alt: '',
        width: 0,
        height: 0
    };
    public mainClass?: string = '';
    public options?: CardOption[] = [];
    public title?: string = '';
    public showProgressBar?: Boolean = false;
    public subtitle?: string = '';

    constructor(title?: string, subtitle?: string, content?: string, image?: CardImage, options?: CardOption[], showProgressBar?: Boolean) {
        if (title) { this.title = title; }
        if (subtitle) { this.subtitle = subtitle; }
        if (content) { this.content = content; }
        if (image) { this.image = image; }
        if (options) { this.options = options; }
        if (showProgressBar) { this.showProgressBar = showProgressBar; }
    }

}