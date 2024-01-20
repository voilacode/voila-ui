
//classlist method for add and remove classes
function classList(elt) {
    var list = elt.classList;
    return {
        toggle: function (c) { list.toggle(c); return this; },
        add: function (c) { list.add(c); return this; },
        remove: function (c) { list.remove(c); return this; }
    };

}

// Resposive views
const responsive_iframes = document.querySelectorAll('.responsive-iframe');
responsive_iframes.forEach(iframe => {
    iframe.addEventListener('click', function handleClick(event) {
        const button = event.target.closest('button');
        const section = event.target.closest('section');
        const target = section.querySelector(".iframe-preview");
        const width = button.dataset.widthClass;
        if(width=="w-full")
            classList(target).remove("w-8/12").remove("w-6/12").add("w-full");
        if (width == "w-8/12")
            classList(target).remove("w-full").remove("w-6/12").add("w-8/12");
        if (width == "w-6/12")
            classList(target).remove("w-full").remove("w-8/12").add("w-6/12");
      
    });
});

//dark and light mode
const color_iframes = document.querySelectorAll('.iframe-color');
color_iframes.forEach(iframe => {
    iframe.addEventListener('click', function handleClick(event) {
        const button = event.target.closest('button');
        const section = event.target.closest('section');
        const target = section.querySelector(".iframe-preview");
        const src = target.src.split("?")[0];
        console.log(src);
        if (target.classList.contains("bg-white")) {
            target.src = src+"?dark=1";
            classList(target).add("bg-gray-800").remove("bg-white");
        } else {
            target.src = src;
            classList(target).add("bg-white").remove("bg-gray-800");
        }
    });
});

// code and preview swaps
const swap_iframes = document.querySelectorAll('.iframe-swap');
swap_iframes.forEach(iframe => {
    iframe.addEventListener('click', function handleClick(event) {
        const section = event.target.closest('section');
        const html_button = section.querySelector(".html-button");
        const preview_button = section.querySelector(".preview-button");
        const iframe_preview = section.querySelector(".iframe-preview");
        const iframe_code = section.querySelector(".iframe-code");
        const type = event.target.textContent.trim();

        if (type == 'HTML') {
            //current buttons change color
            classList(html_button).add("bg-white").remove('bg-gray-100');
            classList(preview_button).remove("bg-white").add('bg-gray-100');
            //iframe code load & preview hide
            classList(iframe_code).remove('hidden').add('block');
            classList(iframe_preview).remove('block').add('hidden');
        } else {
            classList(html_button).remove("bg-white").add('bg-gray-100');
            classList(preview_button).add("bg-white").remove('bg-gray-100');
            //iframe preview load & code hide
            classList(iframe_code).remove('block').add('hidden');
            classList(iframe_preview).remove('hidden').add('block');
        }
    });
});

// const swap_iframes = document.querySelectorAll('.iframe-swap');
// swap_iframes.forEach(iframe => {
//     iframe.addEventListener('click', function handleClick(event) {
//         const iframeDisplay = event.target.dataset.iframeDisplay;
//         const fragments = event.target.id.split("-");
//         const type = fragments[0];
//         const id = fragments[2];
//         event.target.classList.remove('bg-gray-100');
//         event.target.classList.add('bg-white');
//         if (type == 'html') {
//             document.querySelector("#html-button-" + id).classList.remove("bg-gray-100");
//             document.querySelector("#html-button-" + id).classList.add("bg-white");
//             document.querySelector("#preview-button-" + id).classList.remove("bg-white");
//             document.querySelector("#preview-button-" + id).classList.add("bg-gray-100");
//         } else {
//             document.querySelector("#html-button-" + id).classList.add("bg-gray-100");
//             document.querySelector("#html-button-" + id).classList.remove("bg-white");
//             document.querySelector("#preview-button-" + id).classList.add("bg-white");
//             document.querySelector("#preview-button-" + id).classList.remove("bg-gray-100");
//         }

//         if (iframeDisplay == 'show') {
//             document.querySelector("#preview-" + id).classList.remove('hidden');
//             document.querySelector("#preview-" + id).classList.add('block');
//             document.querySelector("#html-" + id).classList.add('hidden');
//             document.querySelector("#html-" + id).classList.remove('block');
//         } else {
//             document.querySelector("#preview-" + id).classList.add('hidden');
//             document.querySelector("#preview-" + id).classList.remove('block');
//             document.querySelector("#html-" + id).classList.remove('hidden');
//             document.querySelector("#html-" + id).classList.add('block');
//         }
//     });
// });