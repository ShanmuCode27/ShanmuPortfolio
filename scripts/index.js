const carouselText = [
    {text: "Vue Js", color: "#64FB3D"},
    {text: "Figma", color: "#f98bfc"},
    {text: "SQL", color: "#CFEBF7"},
    {text:"JavaScript", color: "#F9EB25"},
    {text: "Python", color: "#FAB37B"},
    {text: "PHP", color: "#74eb34"},
    {text: "Java", color: "#ff4a74"},
    {text: "OOP", color: "#f77b1b"}
  ]
  
  $( document ).ready(async function() {
    carousel(carouselText, "#feature-text")
  });
  
  async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++;
    }
    return;
  }
  
  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }



  let textLinkedin = document.getElementById('grid-textLinkedin');
  let linkedin = document.getElementById("linkedin");

  let Github = document.getElementById("github");
  let textGithub = document.getElementById("grid-textGit");

  let Hr = document.getElementById("hr");
  let textHr = document.getElementById("grid-textHr");

  let project = document.getElementById("project");
  let textProject = document.getElementById("grid-textProject");

  let about = document.getElementById("about");
  let textAbout = document.getElementById("grid-textAbout");

  let blog = document.getElementById("blog");
  let textBlog = document.getElementById("grid-textBlog");


  function hideText() {
    textLinkedin.style.opacity = 0;
    console.log(event);
    
  }

  function showText(){
    textLinkedin.style.opacity = 1;
    // console.log(event);

  }

  function hideTextGit(){
    textGithub.style.opacity = 0;
  }

  function showTextGit(){
    textGithub.style.opacity = 1;
  }

  function hideHr(){
    textHr.style.opacity = 0;
  }

  function showHr(){
    textHr.style.opacity = 1;
  }

  function hideProject(){
    textProject.style.opacity = 0;
  }

  function showProject(){
    textProject.style.opacity = 1;
  }

  function hideAbout(){
    textAbout.style.opacity = 0;
  }

  function showAbout(){
    textAbout.style.opacity = 1;
  }

  function hideBlog(){
    textBlog.style.opacity = 0;
  }

  function showBlog(){
    textBlog.style.opacity = 1;
  }


  linkedin.addEventListener("mouseover", hideText);
  linkedin.addEventListener("mouseleave", showText);

  Github.addEventListener("mouseover", hideTextGit);
  Github.addEventListener("mouseleave", showTextGit);

  Hr.addEventListener("mouseover", hideHr);
  Hr.addEventListener("mouseout", showHr);

  project.addEventListener("mouseover", hideProject);
  project.addEventListener("mouseout", showProject);

  about.addEventListener("mouseover", hideAbout);
  about.addEventListener("mouseout", showAbout);

  blog.addEventListener("mouseover", hideBlog);
  blog.addEventListener("mouseout", showBlog);