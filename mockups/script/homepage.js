//desktop-homepage side bar
const element = document.getElementById("home-aside");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  let x = scrollPosition / window.innerHeight;
  if (scrollPosition < window.innerHeight * 0.75) {
    x = 0;
  }

  const opacity = 1 - x;

  element.style.opacity = opacity.toFixed(2);
  //element.style.display = "none";
});

//desktop-con page
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const paragraph1 = document.getElementById("paragraph1");
const paragraph2 = document.getElementById("paragraph2");
const paragraph3 = document.getElementById("paragraph3");

button1.addEventListener("click", () => {
  paragraph1.style.display = "block";
  paragraph2.style.display = "none";
  paragraph3.style.display = "none";
});

button2.addEventListener("click", () => {
  paragraph1.style.display = "none";
  paragraph2.style.display = "block";
  paragraph3.style.display = "none";
});

button3.addEventListener("click", () => {
  paragraph1.style.display = "none";
  paragraph2.style.display = "none";
  paragraph3.style.display = "block";
});

//phone-homepage
const home_bar_menubuttons = document.querySelectorAll(".home_bar_menubutton");
const menu_bar_menubutton = document.getElementById("menu_bar_menubutton");
const menu_homebutton = document.getElementById("menu_homebutton");

const resource_button = document.getElementById("resource_button");
const bandb_button = document.getElementById("bandb_button");
const talk_button = document.getElementById("talk_button");
const s4yt_button = document.getElementById("s4yt_button");
const con_button = document.getElementById("con_button");

const sectionmenu = document.getElementById("sectionmenu");
const sectionhome = document.getElementById("sectionhome");
const footer = document.getElementById("footer");

const sectionresource = document.getElementById("sectionresource");
const sectionbandb = document.getElementById("sectionbandb");
const sectiontalk = document.getElementById("sectiontalk");
const sections4yt = document.getElementById("sections4yt");
const sectioncon = document.getElementById("sectioncon");

home_bar_menubuttons.forEach((button) => {
  button.addEventListener("click", () => {
    sectionmenu.style.display = "block";
    sectionmenu.style.position = "absolute";
    footer.style.display = "none";
  });
});

menu_bar_menubutton.addEventListener("click", () => {
  sectionmenu.style.display = "none";
  footer.style.display = "block";
});

menu_homebutton.addEventListener("click", () => {
  sectionmenu.style.display = "none";
  sectionhome.style.display = "block";
  footer.style.display = "block";

  sectionresource.style.display = "none";
  sectionbandb.style.display = "none";
  sectiontalk.style.display = "none";
  sections4yt.style.display = "none";
  sectioncon.style.display = "none";
});

resource_button.addEventListener("click", () => {
  sectionmenu.style.display = "none";
  sectionhome.style.display = "none";
  footer.style.display = "block";

  sectionresource.style.display = "block";
  sectionbandb.style.display = "none";
  sectiontalk.style.display = "none";
  sections4yt.style.display = "none";
  sectioncon.style.display = "none";
});

bandb_button.addEventListener("click", () => {
  sectionmenu.style.display = "none";
  sectionhome.style.display = "none";
  footer.style.display = "block";

  sectionresource.style.display = "none";
  sectionbandb.style.display = "block";
  sectiontalk.style.display = "none";
  sections4yt.style.display = "none";
  sectioncon.style.display = "none";
});

talk_button.addEventListener("click", () => {
  sectionmenu.style.display = "none";
  sectionhome.style.display = "none";
  footer.style.display = "block";

  sectionresource.style.display = "none";
  sectionbandb.style.display = "none";
  sectiontalk.style.display = "block";
  sections4yt.style.display = "none";
  sectioncon.style.display = "none";
});

s4yt_button.addEventListener("click", () => {
  sectionmenu.style.display = "none";
  sectionhome.style.display = "none";
  footer.style.display = "block";

  sectionresource.style.display = "none";
  sectionbandb.style.display = "none";
  sectiontalk.style.display = "none";
  sections4yt.style.display = "block";
  sectioncon.style.display = "none";
});

con_button.addEventListener("click", () => {
  sectionmenu.style.display = "none";
  sectionhome.style.display = "none";
  footer.style.display = "block";

  sectionresource.style.display = "none";
  sectionbandb.style.display = "none";
  sectiontalk.style.display = "none";
  sections4yt.style.display = "none";
  sectioncon.style.display = "block";
});

//phone-conpage
const onebutton = document.getElementById("1button");
const twobutton = document.getElementById("2button");
const threebutton = document.getElementById("3button");

const con_firstpage = document.getElementById("con_firstpage");
const con_infopage = document.getElementById("con_infopage");
const con_conpage = document.getElementById("con_conpage");
const con_merchpage = document.getElementById("con_merchpage");

const con_back = document.querySelectorAll(".con_back");

onebutton.addEventListener("click", () => {
  con_firstpage.style.display = "none";
  con_infopage.style.display = "block";
  con_conpage.style.display = "none";
  con_merchpage.style.display = "none";
});

twobutton.addEventListener("click", () => {
  con_firstpage.style.display = "none";
  con_infopage.style.display = "none";
  con_conpage.style.display = "block";
  con_merchpage.style.display = "none";
});

threebutton.addEventListener("click", () => {
  con_firstpage.style.display = "none";
  con_infopage.style.display = "none";
  con_conpage.style.display = "none";
  con_merchpage.style.display = "block";
});

con_back.forEach((button) => {
  button.addEventListener("click", () => {
    con_firstpage.style.display = "flex";
    con_infopage.style.display = "none";
    con_conpage.style.display = "none";
    con_merchpage.style.display = "none";
  });
});

//scrolling bahvior

function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        const headerHeight = window.innerHeight * 0.15; // 15vh as a percentage of viewport height
        const yOffset = -headerHeight;
        
        window.scrollTo({
            top: section.offsetTop + yOffset,
            behavior: "smooth"
        });
}



// white-space: nowrap;
//   overflow: hidden; need a height&width
//   text-overflow: ellipsis;
// use it for text(<p>) do not use it for every text. only for the one that does not matter
//a lazy way