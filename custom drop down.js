  
function app() {

    var optionsList = [
        {
        label: "Artificial Intelligence",
        value: "Artificial Intelligence"
        },
        {
        label: "Applied Machine Learning",
        value: "Applied Machine Learning"
        },
        {
        label: "Artificial Reality / Virtual Reality",
        value: "Artificial Reality / Virtual Reality"
        }
    ];

    var selectTag = document.createElement("select");
		selectTag.classList.add('input');
    
    for (let optObj of optionsList) {
        let optEle = document.createElement("option");
        optEle.text = optObj.label;
        optEle.value = optObj.value;
        selectTag.add(optEle);
    }

    var div = document.getElementById("hitec");
    div.appendChild(selectTag);
};
