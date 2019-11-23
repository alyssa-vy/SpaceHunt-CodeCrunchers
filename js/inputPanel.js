class InputPanel{
    constructor(){
        this.windowId = "inputPanel";
        this.buttons = [];
        this.message = "";
    }

    addButton(value, func){
        var newButton = document.createElement("input");
        newButton.classList.add("inputPanelButton");
        newButton.type = "button";
        newButton.value = value;
        newButton.onclick = func;
        this.buttons.push(newButton);
    }

    removeButton(value){
        for (let i = 0; i < this.buttons.length; i++){
            if (this.buttons[i].value = value){
                this.buttons[i].remove();
                this.buttons = this.buttons.splice(i, 1);
                return;
            }
        }
    }

    addCloseButton(value, func){
        this.addButton(value, function(){
            func();
            this.close();
        }.bind(this))
    }

    open(){
        var inputPanel = document.createElement("div");
        var msgBox = document.createElement("div");
        var buttonBox = document.createElement("div");
        inputPanel.classList.add("inputPanel");
        inputPanel.id = this.windowId;
        msgBox.classList.add("inputPanelMessage");
        msgBox.innerHTML = this.message;
        buttonBox.classList.add("inputPanelButtonBox");
        inputPanel.appendChild(msgBox);
        inputPanel.appendChild(buttonBox);
        for (var i = 0; i < this.buttons.length; i++){
            buttonBox.appendChild(this.buttons[i]);
        }

        document.getElementById("viewport").appendChild(inputPanel);
    }

    close(){
        var inputPanel = document.getElementById(this.windowId);
        if (inputPanel)
            document.getElementById("viewport").removeChild(inputPanel);
    }

}
