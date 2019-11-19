let firstRun = true;

function loadSavedSessions() {
    let length = localStorage.getItem("ZZZ");
    if (length !== null) {
        length = parseInt(length);
        let element = document.getElementById("saveName");
        element.options.length = 0;

        var opt0 = document.createElement('option');
        opt0.innerHTML = "Select Saved Session";
        opt0.selected = true;
        opt0.value = "";
        opt0.disabled = true;
        element.appendChild(opt0);

        for (let i = 1; i <= length; ++i){
            let searchkey = "zz" + String(i);
            let fileName = localStorage.getItem(searchkey);
            var opt = document.createElement('option');
            opt.value, opt.innerHTML = String(fileName);
            element.appendChild(opt);
        }

    } else {
        let element = document.getElementById("saveName");
        element.options.length = 0;

        var opt0 = document.createElement('option');
        opt0.innerHTML = "Select Saved Session";
        opt0.selected = true;
        opt0.value = "";
        opt0.disabled = true;
        element.appendChild(opt0);


    }

    switchToPage("savePage");
}

function enableBtn() {
    document.getElementById("loadbtn").disabled = false;
}
