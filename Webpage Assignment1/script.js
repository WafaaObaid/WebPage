
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
 /*رح اعمل المطلوب الخامس على انه الرقم يلي بطلع بالعمليات الحسابية هو 
 رقم لخصم فاز به الزائر لأي لوحة يختارها*/
 
 var price=150;
 var specialNumber = 90; /*رقم الخصم*/
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
 /*عندما يختار الزائر خبار من قائمة اللوحات الصفحة رح توديه للوحة*/
document.addEventListener("DOMContentLoaded", function () { /* هذا السطر يعني استنى الصفحة تحمل بعدين نفذ الحدث*/
  var select = document.getElementById("paint"); /*بننشئ متغير سيليكت بنخون فيه كلمة بينت */
  select.addEventListener("change", function () { /*لما المستخدم يغير الخيار المختار بنفذ الكود*/
    var targetId = this.value; /*بننشئ متغير لربط بين الصورة و العنصر المختار*/
    if (targetId) {
      var targetElement = document.querySelector(targetId); /*بدنا نجيب العنصر الي اله اي دي نفس المتغير تارغيت*/
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" }); /*استخدمت دالة بتخلي التنقل لصورة سهل*/
        targetElement.classList.add("highlight");
         setTimeout(() => {
          targetElement.classList.remove("highlight");
        }, 2000);
      }
    }
  });
});
