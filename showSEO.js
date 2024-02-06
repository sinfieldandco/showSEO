document.addEventListener('DOMContentLoaded', function() {

  
  
  // Check if the URL contains "192. 127. or localhost"
var url = window.location.href;
if (url.indexOf("192.") !== -1 ||
    url.indexOf("127.") !== -1 ||
    url.indexOf("localhost") !== -1 ||
    url.indexOf("?showSEO") !== -1)
    
    
    {
   
    // Function to get meta - example : var description = meta('description');

    function meta(mt) {
        // Get the meta tag element with the given name or property.
        var metaElement = document.querySelector('meta[name="' + mt + '"]');
        if (!metaElement) {
          metaElement = document.querySelector('meta[property="' + mt + '"]');
        }
      
        // If the meta tag element does not exist, return missing error.
        if (!metaElement) {
          return "<b style='color:red;'>" + mt + ": missing!</b>";
        }
      
        // Return the value of the meta tag element's content attribute.
        return metaElement.getAttribute('content');
      }

     // Get the title of the page
        var title = document.title || "<b style='color:red;'>Title not Set!</b>";

        // Get the canonical URL of the page, if it exists
        var canonicalUrl = document.querySelector("link[rel='canonical']");
 
     // If the canonical URL exists, display it in the console
     if (canonicalUrl) {
         canonical = canonicalUrl.getAttribute("href");
     } else {
         canonical = "<b style='color:red;'>No canonical URL found.</b>";
     }


    // Total Count of Each Heading

    var h1Count = document.querySelectorAll("h1").length;
    var h2Count = document.querySelectorAll("h2").length;
    var h3Count = document.querySelectorAll("h3").length;
    var h4Count = document.querySelectorAll("h4").length;
    var h5Count = document.querySelectorAll("h5").length;
    var h6Count = document.querySelectorAll("h6").length;

    // List all headings on the page

    var headingsList = "";
    var theList = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    for (var i = 0; i < theList.length; i++) {
        headingsList += '<p class="small mb-0"><b>' + theList[i].tagName + ':</b> ' + theList[i].innerText + '</p>';
    }

    // Create the Modal to display the info

    const modalContent = `
<div id="seoModal" class="modal fade " role="dialog" tabindex="-1" >
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <p class="modal-title h6">SEO for ` + title + `</p><button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
            <div class="row">
            <div class="col-lg-6">
                <p class="mb-0">Title:</p>
                <p class="small">` + title + `</p>
                <p class="mb-0">Description:</p>
                <p class="small">` + meta('description') + `</p>
                <p class="mb-0">Keywords:</p>
                <p class="small">` + meta('keywords') + `</p>
                <p class="mb-0">URL:</p>
                <p class="small">` + url + `</p>
                <p class="mb-0">Canonical:</p>
                <p class="small">` + canonical + `</p>
                <p class="mb-0">Heading Count:</p>
                <div class="table-responsive text-center">
                <table class="table">
                    <thead>
                        <tr>
                            <th>H1</th>
                            <th>H2</th>
                            <th>H3</th>
                            <th>H4</th>
                            <th>H5</th>
                            <th>H6</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>` + h1Count + `</td>
                            <td>` + h2Count + `</td>
                            <td>` + h3Count + `</td>
                            <td>` + h4Count + `</td>
                            <td>` + h5Count + `</td>
                            <td>` + h6Count + `</td>
                        </tr>
                    </tbody>
                </table></div>
                <p class="mb-0">Headings List <span class="small">(in order of appearance)</span></p>
                ` + headingsList + `
                </div>
                <div class="col-lg-6">
                <p class="h5">Social Meta</p>
                <div class="row" style="border:1px solid #ccc;border-radius:5px!important;;padding:1rem;margin:.2rem;" <p class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
            </svg>` + meta('twitter:title') + `</p>
                <div class="col-6">
                <p class="position-relative"><img alt="Twitter Image" class="img-fluid d-block ogtw " src="` + meta('twitter:image') + `"></p>
                </div>
                <div class="col-6">
                <p class="small">` + meta('twitter:description') + `</p>
                </div>
                </div>

                <div class="row mt-3" style="border:1px solid #ccc;border-radius:5px!important;padding:1rem;margin:.2rem;" <p class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
            </svg>` + meta('og:title') + `</p>
                <div class="col-6">
                <p class="position-relative"><img alt="OG Image" class="img-fluid d-block ogtw " src="` + meta('og:image') + `"></p>
                </div>
                <div class="col-6">
                <p class="small">` + meta('og:description') + `</p>
                </div>
                </div>
</div>
</div>
            </div>
        </div>
    </div>
</div>
`;

    // add the modal to the body

    document.body.innerHTML += modalContent;


    // Create SEO Button to show modal

    var button = document.createElement("button");
    button.className = "btn btn-danger ";
    button.type = "button";
    button.style = "position:fixed;top:1rem;right:1rem;z-index:99999"
    button.dataset.bsTarget = "#seoModal";
    button.dataset.bsToggle = "modal";
    button.innerHTML = "SEO";

    document.body.appendChild(button);



    // display alt and size for each image

    let images = document.querySelectorAll('img');
    images.forEach(img => {

    // Exclude images in the seo modal (with class ogtw)
        if (!img.classList.contains("ogtw")) {

        var parent = img.parentNode;
        parent.classList.add("position-relative");

       

    let overlay = document.createElement('div');


    


        if (img.alt) {
            altText = 'ALT: ' + img.alt;
            overlay.style.background = 'rgba(0, 127, 0, 0.5)';
          } else {
            altText = 'ALT REQUIRED';
            overlay.style.background = 'rgba(125, 0, 0, 0.5)';
          } 

           
    // Get the image's size and add to the info overlay

        let width = img.naturalWidth;
        let height = img.naturalHeight;
        let cwidth = img.clientWidth;
        let cheight = img.clientHeight;

        
        altText  = altText + '\n Natural: ' + width + 'px(w) x ' + height + 'px(h)' +  '\n Client: ' + cwidth + 'px(w) x ' + cheight +'px(h)';


        // Check if the image could be reduced in size and give warning
        if (width > cwidth*1.5) {
            altText  = altText + '\n****Check Image Size****';
            overlay.style.borderBottom = "5px solid red";
        }
        
        overlay.innerText = altText;
        overlay.style.position = 'absolute';
        overlay.style.fontSize = '.6rem';
        overlay.style.color = '#FFF';
        overlay.style.padding = '0.5rem';
        overlay.style.top = '0';
        overlay.style.left = '0';
        img.parentNode.appendChild(overlay);
    }});
 


} //end url check
 
});
