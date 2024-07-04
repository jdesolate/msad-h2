import { projects } from "./constants.js";

const container = document.getElementById("projects-list");

Object.values(projects).forEach((project, index) => {
  const projectName = project.name;

  const a = document.createElement("a");
  a.href = project.github_repo;
  a.id = index;
  a.target = "_blank";

  const img = document.createElement("img");
  img.src = `https://picsum.photos/${index + 200}/${index + 200}`;
  img.alt = index;
  img.id = `img-${index}`;

  const h4 = document.createElement("h4");
  h4.textContent = projectName;

  const p = document.createElement("p");
  p.textContent = "Ongoing Project";

  a.appendChild(img);
  a.appendChild(h4);
  a.appendChild(p);

  container.appendChild(a);
});
