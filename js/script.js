/*===========================================typing========================================*/
var typed =new Typed(".typing",{
    strings:[" ","Web Developer", "Problem Solver","C++ Programmer","Inquisitive person"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,

})

/*=========================================== Aside ========================================*/
const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavList=navList.length,
      allSection=document.querySelectorAll(".section"),
      totalSection=allSection.length;
      for(let i=0;i<totalNavList;i++){
       
        const a=navList[i].querySelector("a");
        a.addEventListener("click",function(){
            removeBacksection();
            for(let j=0;j<totalNavList;j++){ 
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                  //allSection[j].classList.add("back-section");//maintains the prev page
                }
                navList[j].querySelector("a").classList.remove("active");
                
            }
           this.classList.add("active");
           showSection(this);
           if(window.innerWidth<1200){
            asideSectionTogglerBtn();
           }
        })
      }

    
function removeBacksection(){
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num){
    allSection[num].classList.add("back-section");
}  

      function showSection(element){
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.remove("active");
        }
       const target=element.getAttribute("href").split("#")[1];
       //target=href[1];
    //    console.log(target);//gives about, services etc on clicking in console
        document.querySelector("#" + target).classList.add("active");//adds active in console in the respective clicked section--nothing gets printed in console

      }
//the above basically shows active on the clicked section


function updateNav(element){
    for(let i=0;i<totalNavList;i++){
        navList[i].querySelector("a").classList.remove("active");
        const target=element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex=this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBacksection();
    addBackSection(sectionIndex);
})

//nav-toggler functionalities
const navTogglerBtn=document.querySelector(".nav-toggler"),
      aside=document.querySelector(".aside");
      navTogglerBtn.addEventListener("click",()=>{
        asideSectionTogglerBtn();

      })

      function asideSectionTogglerBtn(){

        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");

        for(let i=0;i<totalSection;i++){
            allSection[i].classList.toggle("open"); //to open navbar correctly
        }



      }
