// import { github_usernames } from "./constants";
const github_usernames = [
  "Adrianne-John",
  "arariadne",
  "deandoiii",
  "EarlLawrence7",
  "Erudi787",
  "Gameldon2",
  "itzKitt",
  "j1nsol",
  "jdesolate",
  "jimmm00",
  "johannamae19",
  "jpenaso10",
  "kisetzuu",
  "laurenx122",
  "LoydAMT",
  "M4monski",
  "mantequilla45",
  "Marbench",
  "MarkToroy",
  "Mier03",
  "NE0FEL1S",
  "NiJyuKyu",
  "phyveric24",
  "radenabijah",
  "RainelynSungahid",
  "Raven-20",
  "rhongobongo",
  "Theo12335",
  "Wl-lO",
  "YONG0203",
];

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
