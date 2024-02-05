// ==UserScript==
// @name         ASOBITICKET_v1_UltraFast
// @namespace    github.com/ATRS8268
// @version      1.0.0
// @description  Auto Check on Confirmation Page
// @author       ATRS8268
// @match        https://asobiticket.asobistore.jp/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=asobistore.jp
// @grant        none
// @require      https://code.jquery.com/jquery-1.7.1.min.js
// ==/UserScript==




(function() {
    'use strict';

    const checkboxes = document.querySelectorAll('.m--checkbox');
    if (checkboxes.length > 0) {
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
    }
    const radios = document.querySelectorAll('input[type="radio"][value="accept"]');
    if (radios.length > 0) {
        radios[0].checked = true;
    }
})();
