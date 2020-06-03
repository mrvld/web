export default class view{
    constructor(model){
        this.model = model;
    }
    toHtml(){
        const bold = this.model.text_p.bold;
        const italic = this.model.text_p.italic;
        const underlined = this.model.text_p.underlined;
        const color = this.model.text_p.color;
        const register = this.model.text_p.register;
        const fontsize = this.model.text_p.fontsize;
        let text = this.model.text_p.text;
        if(register == "AB")
            text = text.toUpperCase();
        else if(register == "ab")
            text = text.toLowerCase();
        let style = "color:"+color+"; font-size:"+fontsize+"pt;";
        if(bold)
            style+="font-weight: bold;";
        if(italic)
            style+="font-style: italic;"
        if(underlined)
            style+="text-decoration: underline;"
        return `<span style="${style}">${text}</span>`;
    }
}