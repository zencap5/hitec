  
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
        },
        {
        label: "Big Data / Analytics / Business Intelligence",
        value: "Big Data / Analytics / Business Intelligence"
        },
        {
        label: "Data Science",
        value: "Data Science"
        },
        {
        label: "Mobile Applications",
        value: "Mobile Applications"
        },
        {
        label: "Internet of Things (IoT)",
        value: "Internet of Things (IoT)"
        },
        {
        label: "Natural Language Processing",
        value: "Natural Language Processing"
        },
        {
        label: "Industrial Robotics / Automation",
        value: "Industrial Robotics / Automation"
        },
        {
        label: "Cyber Security",
        value: "Cyber Security"
        },
        {
        label: "SaaS-Cloud Computing",
        value: "SaaS-Cloud Computing"
        },
        {
        label: "Cloud Infrastructure (laas / PaaS)",
        value: "Cloud Infrastructure (laas / PaaS)"
        },
        {
        label: "Networking",
        value: "Networking"
        },
        {
        label: "Programming / Development",
        value: "Programming / Development"
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
