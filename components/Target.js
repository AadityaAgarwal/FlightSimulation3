AFRAME.registerComponent("ring_element",{
    init:function(){
        for(var i=1;i<=20;i++){
            var id=`ring${i}`
            var posX=Math.random()*3000+(-1000)
            var posY=Math.random()*2+(-1)
            var posZ=Math.random()*3000+(-1000)
            var position={x:posX,y:posY,z:posZ}
            this.createRings(id,position)
        }
    },
    createRings:function(id,position){
        var terrain_element=document.querySelector("#terrain")
        var ring=document.createElement("a-entity")
        ring.setAttribute("material","color","yellow")
        ring.setAttribute("geometry",{
            primitive:"torus",
            radius:10,
        })
        ring.setAttribute("static-body",{shape:"sphere",sphereRadius:10})
        ring.setAttribute("game_play",{element_id:`#${id}`})
        ring.setAttribute("position",position)
        ring.setAttribute("id",id)
        terrain_element.appendChild(ring)
    },
})