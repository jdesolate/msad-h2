import { github_usernames, projects } from "./constants.js";

const container = document.getElementById("contributors-list");

Object.values(github_usernames).forEach((username, index) => {
  const contributor = username;

  const projectName = projects.find((project) =>
    project.contributors.includes(contributor),
  )?.name;

  const a = document.createElement("a");
  a.href = `https://github.com/${contributor}`;
  a.id = index;
  a.target = "_blank";

  const img = document.createElement("img");
  img.src = `https://github.com/${contributor}.png`;
  img.alt = index;
  img.id = `img-${index}`;

  const h4 = document.createElement("h4");
  h4.textContent = username;

  const p = document.createElement("p");
  p.textContent = projectName ?? "MSAD-H2";

  a.appendChild(img);
  a.appendChild(h4);
  a.appendChild(p);

  container.appendChild(a);
});
