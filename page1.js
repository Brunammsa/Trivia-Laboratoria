const tagButton = document.getElementById("button");
const form = document.getElementById("form-body");

form.addEventListener("submit", () => {
    const tagName = document.getElementById("name");
    localStorage.setItem("name", tagName.value);
})
