let tabs = document.querySelectorAll('.tablist div');
let panel = document.querySelectorAll('.panels div');

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        panel.forEach((content) => {
            content.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        panel[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});