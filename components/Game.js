AFRAME.registerComponent("game_play",{
    schema:{element_id:{
        type:"string",
        default:"#ring1"
    }},
    isCollided:(element_id)=>{
        const element=document.querySelector(element_id)
        element.addEventListener("collide",e=>{
            if(element_id.includes("#ring")){
                console.log(element_id+" ring collision")
            }
            if(element_id.includes("#hurdle")){
                console.log(element_id+" bird collision")
            }
            
        })
    },
    update:function(){
        this.isCollided(this.data.element_id)
    }
})