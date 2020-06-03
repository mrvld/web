export default class controller{
    constructor(model, view){
        this.model = model;
        this.view = view;
        this.model.setOnChangeCallback((e) => this.onChangeCallback(e));
        document.querySelector('#sB').addEventListener('click', (e)=>this.onClickBold(e));
        document.querySelector('#sI').addEventListener('click', (e)=>this.onClickItalic(e));
        document.querySelector('#sU').addEventListener('click', (e)=>this.onClickUnderlined(e));
        document.querySelector('#SelectColor').addEventListener('change', (e)=>this.onChangeColor(e));
        document.querySelector('#SelectRegister').addEventListener('change', (e)=>this.onChangeRegister(e));
        document.querySelector('#InputText').addEventListener('input', (e)=>this.onChangeText(e));
        document.querySelector('#SelectFontSize').addEventListener('change', (e)=>this.onChanegeFontSize(e));
    }

    onChangeCallback() {
        document.querySelector('#FormatText').innerHTML = this.view.toHtml();
    }

    onChangeColor(Obj){
        this.model.setColor(Obj.target.value);
    }
    onChangeRegister(Obj){
        this.model.setRegister(Obj.target.value);
    }
    onClickBold(){
        this.model.setBold();
    }
    onClickItalic(){
        this.model.setItalic();
    }
    onClickUnderlined(){
        this.model.setUnderlined();
    }
    onChangeText(Obj){
        this.model.setText(Obj.target.value);
    }
    onChangeFontSize(Obj)
    {
        this.model.setFontSize(Obj.target.value);
    }
}