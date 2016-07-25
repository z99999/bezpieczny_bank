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
                $(".clients_section ul").css("display", "none");
                $(".clients_section h6").on("click", function(event){
                    var $this = $(this);
                    $(this).siblings().toggle();
                });
            }
        } else {
            if($(".clients_section").attr("isMobile")) {
                $(".clients_section").removeAttr("isMobile");
                $(".clients_section ul").css("display", "block");
                $(".clients_section h6").off("click");
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
   
    
    //slider
    
    
    calcValueToPay($(".czas").text(), $(".kwota").text().replace(' ', ''))
    
    $(".slider1").slider({
        range:"max",
        min:10000,
        max:100000,
        step:1000,
        value:0,
        slide: function(event, response) {
            $(".kwota").text(thousandsSpace(response.value));
            calcValueToPay($(".czas").text(), response.value);
        }
    });
        
    $(".slider2").slider({
        range:"max",
        min:6,
        max:24,
        step:1,
        value:24,
        slide: function(event, response) {
            $(".czas").text(response.value);
            calcValueToPay(response.value, $(".kwota").text().replace(' ', ''));
        }
    });
    
    function calcValueToPay(months, value) {
        return $(".rata").text(thousandsSpace(Math.round(((value/months)*1.03).toFixed(2))));
    }
    
    function thousandsSpace(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    
});



