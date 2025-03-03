//ads
let headadone = document.querySelector("Cheadad-img-1");
let headadtwo = document.querySelector("Cheadad-img-2");
let youradhere = "ad.jpg";
let headadrealone;
let headadrealtwo;
let headoneurl;
let headtwourl;
if (!headadrealone) {
  headadone.setAttribute("src", youradhere);
  headadone.addEventListener("click", () => {
    alert("No ad at the moment");
  });
} else {
  headadone.setAttribute("src", headadrealone);
}

if (!headadrealtwo) {
  headadtwo.setAttribute("src", youradhere);
  headadtwo.addEventListener("click", () => {
    alert("No ad at the moment");
  });
} else {
  headadtwo.setAttribute("src", headadrealtwo);
}
