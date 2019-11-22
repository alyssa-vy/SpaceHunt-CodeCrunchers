class InputPanel{
    constructor(){
        this.windowId = "inputPanel";
        this.buttonElements = [];
        this.message = "";
    }

    addButton(value, func){
        var newButton = document.createElement("input");
        newButton.classList.add("inputPanelButton");
        newButton.type = "button";
        newButton.value = value;
        newButton.onclick = func;
        this.buttonElements.push(newButton);
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
        for (var i = 0; i < this.buttonElements.length; i++){
            buttonBox.appendChild(this.buttonElements[i]);
        }

        document.getElementById("viewport").appendChild(inputPanel);
    }

    close(){
        var inputPanel = document.getElementById(this.windowId);
        if (inputPanel)
            document.getElementById("viewport").removeChild(inputPanel);
    }

}
