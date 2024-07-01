import { github_usernames } from "./constants.js";

const container = document.getElementById("contributors-list");

github_usernames.forEach((username, key) => {
  const contributor = username;

  const a = document.createElement("a");
  a.href = `https://github.com/${contributor}`;
  a.id = key;
  a.target = "_blank";

  const img = document.createElement("img");
  img.src = `https://github.com/${contributor}.png`;
  img.alt = key;
  img.id = `img-${key}`;

  const h4 = document.createElement("h4");
  h4.textContent = username;

  const p = document.createElement("p");
  p.textContent = `Contributor ${key + 1}`;

  a.appendChild(img);
  a.appendChild(h4);
  a.appendChild(p);

  container.appendChild(a);
});
