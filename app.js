const tl = gsap.timeline({defaults: {duration : 0.75, ease: Back.easeOut.config(1.7) }})
const tl2 = gsap.timeline({defaults: {duration : 0.75, ease: Back.easeOut.config(1.7) }})


// cookie-container animation

tl.fromTo('.cookie-container', {scale: 0}, {scale: 1} )
tl.fromTo(".cookie", {opacity: 0, x:-50, rotation:'-45deg'}, {x:0,rotation:'0deg', opacity: 1, ease: "Elastic.easeOut(0.6,0.2)", duration: 1.5},'<50%')
tl.fromTo(".text", {x:30, opacity: 0}, {x:0,opacity: 1 , ease: "Elastic.easeOut(0.6,0.2)"}, '<')

tl.fromTo(".cookie", {y:0 , rotation: '0deg'}, {y:6, yoyo: true, repeat:-1, rotation: '6deg'}, "<")
tl.fromTo(".cookie", {y:6 , rotation: '6deg'}, {y:0, yoyo: true, repeat:-1, rotation: '0'}, "<")
tl.fromTo(".crumbs", {y:-2 , x:2}, {y:0, x:0, yoyo: true, repeat:-1, ease: Elastic.easeOut.config(1,0.5)},"<")


// button animation

const button= document.querySelector("button");

button.addEventListener("click", () =>{ 
    tl.kill();
    tl2.fromTo(".cookie-container", {y: 0, opacity: 1}, {y: 100, opacity: 0})

})