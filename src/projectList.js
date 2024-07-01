{
  /* <a href=''>
  <img src='https://picsum.photos/200/200' alt='Project 1' />
  <h4>Project 1</h4>
  <p>Project 1 description</p>
</a>; */
}
import { projects } from "./constants.js";

const container = document.getElementById("projects-list");

Object.values(projects).forEach((project, index) => {
  const projectName = project.name;

  const a = document.createElement("a");
  a.href = `https://github.com/${projectName}`;
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
