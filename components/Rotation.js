AFRAME.registerComponent("terrain_rotation",{
    schema:{
        speed:{type:"number",default:0},
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="ArrowRight"){
                if(this.data.speed<0.1){
                    this.data.speed+=0.01
                }
            }
            if(e.key==="ArrowLeft"){
                if(this.data.speed>-0.1){
                    this.data.speed-=0.01
                }
            }
        })
    },
    tick:function(){
        var mapRotation=this.el.getAttribute("rotation")
        mapRotation.y+=this.data.speed
        this.el.setAttribute("rotation",{x:mapRotation.x,y:mapRotation.y,z:mapRotation.z})

    }
})

AFRAME.registerComponent("plane_rotation",{
    schema:{
        speed_of_rotation:{type:"number",default:0},
        speed_of_ascend:{type:"number",default:0},
    },
    init:function(){
        window.addEventListener("keydown",e=>{
            this.data.speed_of_rotation=this.el.getAttribute("rotation")
            this.data.speed_of_ascend=this.el.getAttribute("position")
            var plane_rotation=this.data.speed_of_rotation
            var plane_position=this.data.speed_of_ascend

            if(e.key==="ArrowRight"){
                if(plane_rotation.x<10){
                    plane_rotation.x+=0.5
                    this.el.setAttribute("rotation",plane_rotation)
                }
            }
            if(e.key==="ArrowLeft"){
                if(plane_rotation.x>-10){
                    plane_rotation.x-=0.5
                    this.el.setAttribute("rotation",plane_rotation)
                }
            }
            if(e.key==="ArrowUp"){
                if(plane_rotation.z<20){
                    plane_rotation.z+=0.5
                    this.el.setAttribute("rotation",plane_rotation)
                }
                if(plane_position.y<2){
                    plane_position.y+=0.01
                    this.el.setAttribute("position",{x:plane_position,x,y:plane_position.y,z:plane_position.z})
                }
            }
            if(e.key==="ArrowDown"){
                if(plane_rotation.z>-10){
                    plane_rotation.z-=0.5
                    this.el.setAttribute("rotation",plane_rotation)
                }
                if(plane_position.y>-2){
                    plane_position.y-=0.01
                    this.el.setAttribute("position",plane_position)
                }
            }
        })
    },
})