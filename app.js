     if (window.FileReader) {
        document.getElementById('userInfoForm').addEventListener('submit', function(event) {
          event.preventDefault();

        
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let datbirth = document.getElementById('datbirth').value;
        let gender = document.getElementById('gender').value;
        let address = document.getElementById('address').value;


        let fileInput = document.getElementById('image');
        let imageFile = fileInput.files[0];

        let reader = new FileReader();
        reader.onload = function(event) {
            let imageUrl = event.target.result; 
            let cardInForm = 
       `<div class="car">
        <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                    <img src=""${imageUrl}" class="card-img-top" alt="Image">
                    <div class="card-body">
                    <h5 class="card-title">${firstName} ${lastName}</h5>
                    <p class="card-text"><strong>Email:</strong> ${email}</p>
                    <p class="card-text"><strong>Phone:</strong> ${phone}</p>
                    <p class="card-text"><strong>Date of Birth:</strong> ${datbirth}</p>
                    <p class="card-text"><strong>Gender:</strong> ${gender}</p>
                    <p class="card-text"><strong>Address:</strong> ${address}</p>
                    </div>
                </div>
            </div>
            </div>`;
  
            document.getElementById('submittedData').innerHTML += cardInForm;
            document.getElementById('userInfoForm').reset();

          };
          reader.readAsDataURL(imageFile);
        });}
         else {
        console.error('FileReader is not supported.');
      }