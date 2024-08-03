// import "./styles.css";
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

const h1 = document.createElement("h1"); // add
h1.textContent = "DOM document"; // Correctly set the text content
h1.style.textAlign = "center";
h1.style.color = "white";
mainEl.append(h1);

h1.classList.add("flex-ctr"); //DOMresult: <h1 class="flex-ctr"> document</h1>

/* part 2 */
const topMenuEl = document.getElementById("top-menu");
topMenuEl.setAttribute("height", "100%"); // set height of top-menu
topMenuEl.classList.add("flex-around");
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

/* part 3 */
menuLinks.forEach((link) => {
  const anchor = document.createElement("a");
  // Set the href attribute
  anchor.href = link.href;

  // Set the text content
  anchor.textContent = link.text;

  topMenuEl.appendChild(anchor);
});
