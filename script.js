
var printText='Abhimanyu Saraswat';
var z=0;
var speed=70;

function printName(){
    if(z<printText.length){
        console.log(i,printText.charAt(z));
        document.getElementById("header-user-name").innerHTML+=printText.charAt(z);
        z++;
        setTimeout(printName,speed)
    }
}



    // For Scroll Smooth
        var sections=document.querySelectorAll('.nav-menu a');
        console.log(sections);
        for(var i=0;i<sections.length;i++){
            //console.log(sections[i]);
            sections[i].addEventListener('click',
            function(event){
                event.preventDefault(); 
                var text=this.textContent.trim().toLowerCase(); //used to get the tag clicked
                if(text=='home'){
                    var home=document.getElementById('header-user-name');
                    scrollTo(0,home.getBoundingClientRect().top);
                    console.log("scrolled to home");
                    return;
                }
                var targetsection=document.getElementById(text);
                console.log(targetsection);
                
                var interval=setInterval(
                    function(){
                    var coordinates=targetsection.getBoundingClientRect();
                    console.log(sections[i],coordinates.top);
                        if(coordinates.top<=0 ){
                            clearInterval(interval);
                            console.log(sections[i],"Interval cleared");
                            return;
                        }

                        if((window.innerHeight + window.scrollY) >= document.body.scrollHeight-100){
                            //usedt for the last element..to detect if user reached the end of webpage
                            //-100 is there to prevent infinte scrolling effect
                            //ineerHeight gives vh
                            clearInterval(interval);
                            console.log(sections[i],"Interval cleared");
                            return;
                        }
                        
                        window.scrollBy(0,50);
                    },15);
                });
        }

        
        var start=document.getElementById('skills');
        var skills=document.querySelectorAll('.skills-display .height-border-common-skill');
        window.addEventListener('scroll',checkscroll);
        var animation=false;


        function intitalizeBar(){
            for(let bar of skills){
                bar.style.width=0+"%";
            }
        }
        




    function fillbar(){
    for(let bar of skills){
            let target=bar.getAttribute('percentage');
            let currentwidth=0;
            let interval=window.setInterval(
                function(){
                    if(currentwidth>target){
                        clearInterval(interval);
                        return;
                    }
                    currentwidth++;
                    bar.style.width=currentwidth+"%";
                },7);
        }
    }

    /*
    use when each bar starts animation whenever it gets in frame
    Each bar gets animated at different time..
    function checkscroll(){

        for(let bar of skills){
            if(bar.getAttribute("data-visited")=='false' && bar.getBoundingClientRect().top<=window.innerHeight - bar.getBoundingClientRect().height){
                bar.setAttribute("data-visited","true");
                console.log("inside ",bar);
                fillbar(bar);
            }
            else if(bar.getBoundingClientRect().top>=window.innerHeight){
                bar.setAttribute("data-visited","false");
                intitalizeBar();
            }
        }
    }
    */

    //shoots animation when skill container gets in frame..All bars get animated at same time
    function checkscroll(){
        if(!animation && start.getBoundingClientRect().top<=window.innerHeight){
            animation=true;
            console.log("inside");
            fillbar();
        }
        else if(start.getBoundingClientRect().top>window.innerHeight){
            animation=false;
            intitalizeBar();
        }
    }

