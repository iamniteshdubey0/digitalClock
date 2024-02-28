let [sec, min, hour] = [0, 0, 0];
const clock = document.querySelector('.clock');
let timer = null;
clock.innerHTML = `${hour < 10 ? '0'+hour : hour}:${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`
function SW(){
    sec++
    if(sec == 60){
        sec=0
        min++
        if(min == 60){
            min=0
            hour++
        }
    }

    clock.innerHTML = `${hour < 10 ? '0'+hour : hour}:${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`
}

function startSW(){
    if(timer != null){
        clearInterval(timer)
    }
    timer = setInterval(SW, 1000);
}

function stopSW(){
    clearInterval(timer);
}

