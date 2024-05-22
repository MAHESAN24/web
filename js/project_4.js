var zom_par = document.querySelector('.zombie_para')
var zom_img = document.querySelector('.zombie')
var btn = document.querySelectorAll('.nxt')

var img = ['Zombie_1','Zombie_3','Zombie_2' ]
var index = 0


btn.forEach((info)=>{
    info.addEventListener('click',()=>{
        
        
        if(index < img.length-1){
            index++
            zom_img.style.backgroundImage = `url(/Images/mini_project/ShootGameImage/${img[index]}.png)`
            // console.log('less')
        }else{
            index = 0
            zom_img.style.backgroundImage = `url(/Images/mini_project/ShootGameImage/${img[index]}.png)`
            // console.log('high')
        }


        switch(index){
            case 0:
                zom_par.innerHTML = `this zombie is easy to destory the zombie and
                                    this make healt is very low and bite power to set is low`
                zom_par.style.transition = '1s ease-in-out';
                break;
            case 1:
                zom_par.innerHTML = `thsi is type 2 zombie is move fast to attact the player
                                    and fast to destory the player healt power is high and make
                                    to more bite faster`
                zom_par.style.transition = '1s ease-in-out';
                break;
            case 2:
                zom_par.innerHTML = `its is more powerful aggressive zombie and this type 3 zombie
                                    it move slower and attack power is high is less than 4 bite
                                    the player will die`
                zom_par.style.transition = '1s ease-in-out';
                break;
        }
        
    })
})

