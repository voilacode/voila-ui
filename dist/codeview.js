/**
    * Convert a string to HTML entities
    */
function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str
        .split("")
        .map(entity => htmlEntities[entity] || entity)
        .join("");
}
function get(name) {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
}
window.onload = function () {
    if (get('code')) {
        let body = document.getElementsByTagName("body")[0];
        let code = document.getElementById("code");
        var myDiv = document.createElement("pre");
        myDiv.innerHTML = "<code class='language-html'>" + convertHTML(code.innerHTML) + "</code>";
        body.replaceChild(myDiv, code);
        hljs.highlightAll();
    }
    if (get('dark')) {
        let html = document.getElementsByTagName("html")[0];
        html.classList.add("dark");

    }
};