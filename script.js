function addNewEdField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('edField');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let edob = document.getElementById('ed');
    let edButtonob = document.getElementById('edButton');

    edob.insertBefore(newNode,edButtonob);
}

function addNewPrField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('prField');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let prob = document.getElementById('pr');
    let prButtonob = document.getElementById('pButton');

    prob.insertBefore(newNode,prButtonob);
}
function addNewSkField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('skField');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let skob = document.getElementById('sk');
    let skButtonob = document.getElementById('skButton');

    skob.insertBefore(newNode, skButtonob);
}


//generate function

function generateResume(){
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;



    var emailcheck = /^[A-Za-zd{0-9}]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;
    let phonecheck = /^[d{0-9}]{10}$/;
if (emailcheck.test(document.getElementById('emailField').value)) {
    document.getElementById('mail').innerHTML = "";
  } else {
    document.getElementById('mail').innerHTML = "**Email-id is invalid";
    return false;
  }
  if (phonecheck.test(document.getElementById('contactField').value)) {
    document.getElementById('phone').innerHTML = "";
  } else {
    document.getElementById('phone').innerHTML = "**Contact number is invalid";
    return false;
  }


  function displaySelectedImage() {
    const inp = document.getElementById('imgField');
    const img = document.getElementById('imgT');

    if (inp.files && inp.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            img.src = e.target.result;
        };

        reader.readAsDataURL(inp.files[0]);
    }
}

document.getElementById('imgField').addEventListener("onchange",displaySelectedImage());

    document.getElementById('nameT2').innerHTML=nameField;
    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;
    document.getElementById('ageT').innerHTML=document.getElementById('ageField').value;
    document.getElementById('emailT').innerHTML=document.getElementById('emailField').value;
    document.querySelector('.adressT').innerHTML=document.getElementById('addressField').value;
    document.getElementById('gitT').innerHTML=document.getElementById('gitField').value;
    document.getElementById('linkedT').innerHTML=document.getElementById('linkedinField').value;





    document.getElementById('objectiveT').innerHTML=document.getElementById('objField').value;
    let eds =  document.getElementsByClassName('edField');

    str = '';
    for(let e of eds){
        str += `<li>${e.value} </li>`;
    }

    document.getElementById('edT').innerHTML=str;

    let prds =  document.getElementsByClassName('prField');

    str1= '';
    for(let e of prds){
        str1 += `<li>${e.value} </li>`;
    }
    document.getElementById('prT').innerHTML=str1;

    let skds = document.getElementsByClassName('skField');
    let str2 = '';
    for(let e of skds){
        str2 += `<li>${e.value}</li>`
    }
    document.getElementById('skT').innerHTML=str2;
    document.getElementById('cv-form').style.display= "none";
    document.querySelector('.cv-template').style.display="block";

}
function makePDF(){
    window.print();
}


// function printResume(){
//     // window.print();
//     const element = document.getElementById("cv-template");
//     var opt = {
//       margin:       1,
//       filename:     'myfile.pdf',
//       image:        { type: 'jpeg', quality: 0.98 },
//       html2canvas:  { scale: 2 },
//       jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };
    
//     // New Promise-based usage:
//     html2pdf().set(opt).from(element).save();
// }


//  function exportHTMLtoPDF() {
//          let htmlElement = document.getElementById('cv-template');

//          html2pdf().from(htmlElement).save('exported_file.pdf');
//       }

//       document.getElementById('exportButton').addEventListener('click', exportHTMLtoPDF);

// window.html2canvas = html2canvas;
// window.jsPDF = window.jspdf.jsPDF;

// function makePDF(){
//    function auto_down(){
//     window.devicePixelRatio = 4;
    
//     html2canvas(document.querySelector("#capture")).then(canvas => {
        
//         var img = canvas.toDataURL("image/png");

//         var doc = new jsPDF('p','px',[940,665]);
//         // doc.setFont('Arial');
//         // doc.getFontSize(11);
//         doc.addImage(img,'PNG',0,0,940,665);
//         doc.save("htmltoPDF.pdf");
//     });
// };
// auto_down();
// }

// function makePDF(){
// const {jsPDF} = jspdf;
// function down(){
//     window.devicePixelRatio =4;
// html2canvas(document.querySelector("#capture")).then(canvas => {
//     let img = canvas.toDataURL('image/png');
//     const doc = new jsPDF('div' , 'px' , [620 , 650]);
//     doc.addImage(img,'PNG',0,0,620,650);
//     doc.save('resume.pdf');

// })
// }
// down();
// }