
/*2. Basic JavaScript Syntax*/
 function welcome(){
  alert("Welcome to your favorite store, We are happy to see you");
 }
 window.onload = welcome;

 /*3. Variables and Data Types*/
 var storeName = "The Master's Touch";
 var numberOfProducts = 22;
 var isGalleryOpen = true;
  
 console.log("Store Name: ", storeName);
 console.log("Number of products: ", numberOfProducts);
 console.log("Is Gallery Open: ", isGalleryOpen);

 /*4. Arrays*/
 var paintingNames = ["Starry Night", "Monalisa", "Cafe Night", "Girl with a Pearl Earring"];
 console.log("Famous paintings");
 for(var i=0; i<paintingNames.length; i++){
    console.log(paintingNames[i]);
 }
 /*5. Basic Operators*/
 
 var price=150;
 var specialNumber = 90; 
  var difference = price - specialNumber; 
  var sum = price + specialNumber;
  var product= price*specialNumber;
  var division = price/specialNumber;

  document.write('<div style="text-align: center; border: 2px solid green; padding: 10px; margin: 20px;">');
  document.write('<h2>🎉 Congratulations, you have won a special discount! 🎉</h2>');
  document.write('<p>Because you are our distinguished visitor, you won a discount worth <strong>' + difference + '$</strong> On any board you want</p>');
  document.write('<p><small>Results of calculations</p></small>');
  document.writeln('<p><small>'+ price + '+' + specialNumber + '=' + sum + '</p></small>');
  document.writeln('<p><small>'+ price + '*' + specialNumber + '=' + product + '</p></small>');
  document.writeln('<p><small>'+ price + '/' + specialNumber + '=' + division + '</p></small>');
  document.writeln('<p><small>'+ price + '-' + specialNumber + '=' + difference + '</p></small>');
  document.write('</div>');

 /*8. Event Handling*/
  const colorButton = document.getElementById('colorButton');
  colorButton.addEventListener('click', function(){
    document.body.style.backgroundColor= '#F5DEB3';
  }
);


/*A special addition from me*/
document.addEventListener("DOMContentLoaded", function () { 
  var select = document.getElementById("paint"); 
  select.addEventListener("change", function () { 
    var targetId = this.value; 
    if (targetId) {
      var targetElement = document.querySelector(targetId); 
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" }); 
        targetElement.classList.add("highlight");
         setTimeout(() => {
          targetElement.classList.remove("highlight");
        }, 2000);
      }
    }
  });
});
