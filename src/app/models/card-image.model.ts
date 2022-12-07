export class CardImage {

    public alt?: string = '';
    public height?: number = 0;
    public url: string = '';
    public width?: number = 0;

    constructor(url: string, alt?: string) {
        this.url = url;
        this.width = 0;
        this.height = 0;
        if (alt) { this.alt = alt; }
    }
    
}