// Tips array
const tips = ["Don't overthink the performance.", 
              "Remember to have fun!", 
              "Make friends on your team/group.", 
              "Take deep breaths if you're feeling nervous."];
var cnt = 0;

//Adds click event listener
document.getElementById("tipsBtn").addEventListener("click", switchTip);

function switchTip() {
    // Finds element with id sayings and sets it to a new saying
    document.getElementById("message").innerHTML = tips[cnt % (tips.length)]; 
    cnt++;
}