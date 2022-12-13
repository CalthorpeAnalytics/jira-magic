// ==UserScript==
// @name         Jira Magic
// @namespace    github.com/CalthorpeAnalytics/jira-magic
// @version      1.0
// @description  User script helpers for Jira
// @author       CalthorpeAnalytics
// @match        https://*.atlassian.net/jira/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=urbanfootprint.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  let descriptionFns = document.createElement("script");
  descriptionFns.type = "text/javascript";
  descriptionFns.innerHTML = `
        function clearDesc() {
            let node = document.getElementById("description-container");
            let box = node.querySelectorAll('[role="textbox"]')[0];
            console.log(box);
            box.setHTML("<p></p>");
        }
        function storyDesc() {
            let node = document.getElementById("description-container");
            let box = node.querySelectorAll('[role="textbox"]')[0];
            box.setHTML("\
                <h2>Story Details</h2> \
                <h2>Acceptance Criteria</h2> \
                <h3>Functional Requirements</h3> \
                <h3>Nonfunctional Requirements</h3> \
                <h2>Implementation</h2> \
                <h3>Technical Design</h3> \
                <h3>Testing Plan</h3> \
            ");
        }
        function taskDesc() {
            let node = document.getElementById("description-container");
            let box = node.querySelectorAll('[role="textbox"]')[0];
            box.setHTML("\
                <h2>Task Details / Context</h2> \
                <h2>Goals</h2> \
                <h2>Acceptance Criteria</h2> \
            ");
        }
        function requestDesc() {
            let node = document.getElementById("description-container");
            let box = node.querySelectorAll('[role="textbox"]')[0];
            box.setHTML("\
                <h2>Request Details / Context</h2> \
                <h2>Urgency / Desired Turnaround</h2> \
                <h2>Acceptance Criteria</h2> \
            ");
        }
    `;
  document.getElementsByTagName("head")[0].appendChild(descriptionFns);
  const observer = new MutationObserver((mutations) => {
    mutations
      .flatMap((mutation) => Array.from(mutation.addedNodes))
      .forEach((node) => {
        if (node.id === "description-container") {
          node
            .querySelector("label")
            .insertAdjacentHTML(
              "afterEnd",
              " <Button onclick='event.preventDefault(); clearDesc();'>clear</Button>"
            );
          node
            .querySelector("label")
            .insertAdjacentHTML(
              "afterEnd",
              " <Button onclick='event.preventDefault(); requestDesc();'>request</Button>"
            );
          node
            .querySelector("label")
            .insertAdjacentHTML(
              "afterEnd",
              " <Button onclick='event.preventDefault(); taskDesc();'>task</Button>"
            );
          node
            .querySelector("label")
            .insertAdjacentHTML(
              "afterEnd",
              " <Button onclick='event.preventDefault(); storyDesc();'>story</Button>"
            );
        }
      });
  });
  observer.observe(document.body, { subtree: true, childList: true });
})();
