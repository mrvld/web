class text_p{
	constructor(){
		this.text = "";
		this.bold = false;
		this.italic = false;
		this.underlined = false;
		this.color = "black";
		this.register = "Ab";
		this.fontsize = "10";
		this.onChangeCallback = null;
	}
}

export default class model{
	constructor(){
		this.text_p = new text_p();
	}

	setText(text){
		this.text_p.text = text;
		this.onChangeCallback();
	}

	setColor(color){
		this.text_p.color = color;
		this.onChangeCallback();
	}

	setRegister(reg){
		this.text_p.register = reg;
		this.onChangeCallback();
	}

	setBold(){
		this.text_p.bold = !this.text_p.bold;
		this.onChangeCallback();
	}

	setItalic(){
		this.text_p.italic = !this.text_p.italic;
		this.onChangeCallback();
	}

	setUnderlined(){
		this.text_p.underlined = !this.text_p.underlined;
		this.onChangeCallback();
	}
	
	setFontSize(FontSize){
		this.text_p.fontsize = FontSize;
		this.onChangeCallback();
	}

	setOnChangeCallback(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }
}