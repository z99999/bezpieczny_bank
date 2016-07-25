document.addEventListener("DOMContentLoaded", function(event){
    
    //clients

   showClients();

    
    $(window).on("resize", function(){
        showClients();
    });
    
    function showClients() {
        
        if(!(window.matchMedia("(min-width:550px)").matches)){
            if(!$(".clients_section").attr("isMobile")) {
                $(".clients_section").attr("isMobile", "true");
                $(".clients_section").find("li").css("display", "none");
                $(".clients_section h6").on("click", function(event){
                    var $this = $(this);
                    $(this).siblings().toggle();
                });
            }
        } else {
            if($(".clients_section").attr("isMobile")) {
                $(".clients_section").removeAttr("isMobile");
                $(".clients_section").find("li").css("display", "list-item");
                $(".clients_section").find("h6").off("click");
            }
        }
    };
    
    //menu
    
    showMenu();
    
    $(window).on("resize", function(){
        if(window.matchMedia("(min-width:800px)").matches){
            $(".menu").find("ul").css("display", "block");
        } else {
            $(".menu").find("ul").css("display", "none");
        }
    });
                     
    function showMenu() { 
        
        $(".fa.fa-bars").on("click", function(event){
            console.log('click');
            $(".menu").find("ul").toggle();

        });                     
    }
   
    
        
    
    
    
    
});



