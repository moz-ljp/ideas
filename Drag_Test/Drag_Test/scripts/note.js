﻿dragElement(document.getElementById(("note-1")));
dragElement(document.getElementById(("note-2")));

var numberOfNotes = 2;

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    var element = elmnt;

    elmnt.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {

        var allNotes = document.getElementsByClassName("note");
        for (var a = 0; a < allNotes.length; a++) {
            allNotes[a].style.zIndex = 1;
        }
        element.style.zIndex = 2;

        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {

        var allNotes = document.getElementsByClassName("note");
        for (var a = 0; a < allNotes.length; a++) {
            allNotes[a].style.zIndex = 1;
        }
        element.style.zIndex = 2;

        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}



