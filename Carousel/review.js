var img = document.querySelector("#imgChange");
      var leftElement = document.getElementById("left");
      var rightElement = document.getElementById("right");
      var Name = document.querySelector("h3");
      var bio = document.querySelector("p");
      var porfesion = document.querySelector("#profesion");
      var supriseBtn = document.querySelector("#suprise");
          
      let imgArr = ["https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
        "https://images.unsplash.com/photo-1530423470967-45b90dca3a4f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?q=80&w=801&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ];

      // array for name
      let Names  =[
        "Susan Smit",
        "Divya Tripathi",
        "Monicka Chauchan",
        "Neha Chaudhary",
        "Simran Thakur",
        "lovely Singh"
      ]
      let porfesions = [
      "WEB DEVELOPER",
        "TEACHER",
        "ANDORID DEVELOPER",
        "SOFTWARE DEVELOPER",
        "CONTENT CREATER",
        "YOUTUBER"
      ]
      let bios =[
        "Adventurous soul navigating life's uncharted territories. I thrive on adrenaline-fueled escapades and believe in embracing spontaneity. From scaling mountains to diving into cultures, every experience shapes my story",
        "A dreamer painting the world with creativity. As an artist, I weave emotions into colors and words. My canvas is a reflection of life's beauty and complexity, capturing moments that resonate with the soul.",
        "Tech enthusiast breaking barriers in the digital realm. Passionate about coding and innovation, I'm on a mission to revolutionize how we interact with technology. My code speaks louder than words.",
        "Dedicated to healing hearts and minds. As a therapist, I listen to stories whispered in silence. Compassion is my guiding light, helping others navigate the labyrinth of emotions.",
        "Finding solace in the embrace of nature's wonders. Hiking trails, capturing sunsets, and nurturing green spaces bring me joy. Sustainability advocate, aiming to protect our planet's treasures.",
        "A catalyst for change, amplifying voices that yearn to be heard. Engaged in social causes, advocating for equality and justice. Every action contributes to a world painted with inclusivity."
    ]
      
      let currentIndex = 0;
      function changeImage(direction){
        if (direction === "left"){
          if(currentIndex === 0){
            currentIndex = imgArr.length -1;
          }else{
            currentIndex -= 1;
          }
          

        }
        else{
          if(currentIndex === imgArr.length -1){
            currentIndex = 0;
          }else{
            currentIndex += 1;
          }
        }
        img.src = imgArr[currentIndex];
        Name.textContent = Names[currentIndex];
        bio.textContent = bios[currentIndex];
        porfesion.textContent = porfesions[currentIndex];
      }
      leftElement.addEventListener("click", () => changeImage("left"));
      rightElement.addEventListener("click", () => changeImage("right"));
      supriseBtn.addEventListener("click",()=>{
       let  randomIndex =Math.floor(Math.random()* imgArr.length);
       currentIndex = randomIndex;
       img.src = imgArr[currentIndex];
       Name.textContent = Names[currentIndex];
        bio.textContent = bios[currentIndex];
        porfesion.textContent = porfesions[currentIndex];
        supriseBtn.style.transform = 'scale(0.9)';
      })