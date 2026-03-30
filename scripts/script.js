const projects = document.querySelectorAll(".projects > div");

projects.forEach((project) => addProjectWidgets(project));

function addProjectWidgets(project) {
  const div = document.createElement("div");

  let useHrefs = ["#star-icon", "#eye-icon", "#fork-icon"];

  for (let i = 0; i < 3; i++) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    const button = document.createElement("button");
    svg.setAttribute("viewBox", "0 0 24 24");
    use.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      useHrefs[i],
    );
    svg.appendChild(use);
    button.appendChild(svg);
    div.appendChild(button);
  }

  project.appendChild(div);
}
