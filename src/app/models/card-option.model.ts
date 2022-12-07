export class CardOption {

    public optionText: string = '';
    public optionAction: any;

    constructor(optionText: string, optionAction: any) {
        this.optionText = optionText;
        this.optionAction = optionAction;
    }
}