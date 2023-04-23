let weeks = 0;
const plant = document.querySelector("#plant");
document.querySelector('#weeks').textContent = weeks;


const tree = [
    { week: 0, src: "./treeimages/week0.png" },
    { week: 5, src: "./treeimages/week5.png" },
    { week: 10, src: "./treeimages/week10.png" },
    { week: 15, src: "./treeimages/week15.png" },
    { week: 20, src: "./treeimages/week20.png" },
    { week: 25, src: "./treeimages/week25.png" },
];




//HW
//chage image based on week count




function changeTreeImage() {
    for (let i = 0; i < tree.length; i++) {
        if (weeks >= tree[i].week) {
            plant.src = tree[i].src;
        }
    }
}

document.querySelector("#more").addEventListener("click", function (event) {
    if (weeks < 25) {
        weeks += 5;
        document.querySelector('#weeks').textContent = weeks;
        changeTreeImage();
    }
});

document.querySelector("#less").addEventListener("click", function (event) {
    if (weeks > 0) {
        weeks -= 5;
        document.querySelector('#weeks').textContent = weeks;
        changeTreeImage();
    }
});
