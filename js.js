let image=document.getElementById('image');
                let images=['/13 pro max.jpg','/13 pro max1.jpg','/13 pro max2.jpg']
                setInterval(function() {
                let random =Math.floor(Math.random()*3);
                image.src=images[random];
                },800);