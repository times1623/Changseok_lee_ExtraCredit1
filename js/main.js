(() => { 

var panelInfo = document.querySelector(".profPanelText").querySelectorAll("p");
var profImg = document.querySelectorAll(".profileImg");
var courseInfo = document.querySelector(".courseInfo").querySelector("h2");
var courseDesc = document.querySelector(".courseInfo").querySelector("p");
var titles = document.querySelector(".lowerPanelNav");


function inputData(data){
    
    
    panelInfo[0].textContent = data.coursename;
    panelInfo[0].innerHTML += `- <span class="test-primary">${data.coursecode}</span>`;
    panelInfo[1].textContent = `Professor: ${data.profname}`;
    
    data.classtime.forEach(time => {
      let newTime = `<li><span class="fa fa-clock-o">${time}</span></li>`;
      panelInfo[1].parentElement.querySelector('ul').innerHTML += newTime;
    });
    
    profImg[1].src = `images/${data.profimg}`;

    courseInfo.textContent = data.coursename;
    courseInfo.innerHTML += `- ${data.coursecode}`;
    courseDesc.textContent = data.coursedesc;

    data.coursecontent.forEach(title => {
        let courseTitle = `<li>${title}</li>`;
        titles.querySelector('ul').innerHTML += courseTitle;
    });


 


}







inputData(classData);



})();

