import view from '/view.js';
import controller from '/controller.js';
import model from '/model.js';
let Model = new model();
let View = new view(Model);
let Controller = new controller(Model, View);