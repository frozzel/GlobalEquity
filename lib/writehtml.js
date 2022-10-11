module.exports={
    genHtml(devProArr){
       const linkHtmlarr=[] ;
       const topHtml=`
       <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    
    <link rel="stylesheet" href="/scr/style.css">
    <title>Global Equity</title>
</head>
<nav class="navbar bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="./scr/High Resolution Logo - Transparent Background.png" alt="Logo" width="" height="35" class="d-inline-block align-text-top ">
       
      </a>
    </div>
  </nav>
<body>
    <main>
        <div class="container-fluid row blank"></div>      
     
    <div class="container-fluid">
      <div class="row  gx-3 align-items-center">
        <div class="container-fluid row header">Meet ${devProArr[0]} Development Team</div>
       `;
       linkHtmlarr.push(topHtml);
       
       for (let i = 1; i <devProArr.length; i++){
        let cardHtml= `
        <div class="col">
        <div class="card " style="width: 18rem; height: 22rem;">
            <div class="card-body">
              <h5 class="card-title">${devProArr[i].name}</h5>
              <h6 class="card-subtitle mb-2 text-muted ">${devProArr[i].role}</h6>
              <p class="card-text"><span>Employee Id:</span>${devProArr[i].id}</p>
              <p class="card-text"><span>Office Phone#:</span>${devProArr[i].phone}</p>
              <p class="card-text"><span>School:</span>${devProArr[i].school}</p>
              <a href="mailto:${devProArr[i].email}" class="card-link">Email</a>
              <a href="https://github.com/${devProArr[i].github}" class="card-link">Github</a>
            </div>
          </div>
    </div>

        `;

        cardHtml+= `
        </div>
        </div>
        </main>
    </body>
    </html>`;
    linkHtmlarr.push(cardHtml);

       };
       return linkHtmlarr;
    }
}