document.querySelectorAll(".tree li").forEach(function(e){if(e.children.length){var t=document.createElement("span");t.textContent=e.firstChild.nodeValue,e.removeChild(e.firstChild),e.insertBefore(t,e.firstChild),t.addEventListener("click",function(e){e.preventDefault();var t=this.parentNode.querySelector("ul");// eslint-disable-next-line max-len
t.style.display="none"===t.style.display?"block":"none"})}});//# sourceMappingURL=index.c3de8378.js.map

//# sourceMappingURL=index.c3de8378.js.map
