
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    // Seleccionar todas las imágenes con las clases "myImg" y "myImagenes"
    var allImages = document.querySelectorAll(".myImg, .masterWP,.adminWP,.deskInter,.scanWP,.employeWP,.bajaUI,.bajaWP,.bajavsri,.planWB,.inter");

    allImages.forEach(function (img) {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;

            // Limpiar imágenes adicionales en el modal
            var additionalImages = modal.querySelectorAll('img:not(#img01)');
            additionalImages.forEach(function (image) {
                image.remove();
            });

            var claseEspecifica = '';

            if (this.classList.contains('masterWP')) {
                claseEspecifica = 'masterWP';
            } else if (this.classList.contains('adminWP')) {
                claseEspecifica = 'adminWP';
            } else if (this.classList.contains('deskInter')) {
                claseEspecifica = 'deskInter';
            }else if (this.classList.contains('scanWP')) {
                claseEspecifica = 'scanWP';
            } else if (this.classList.contains('employeWP')) {
                claseEspecifica = 'employeWP';
            } else if (this.classList.contains('bajaUI')) {
                claseEspecifica = 'bajaUI';
            } else if (this.classList.contains('bajaWP')) {
                claseEspecifica = 'bajaWP';
            }  else if (this.classList.contains('bajavsri')) {
                claseEspecifica = 'bajavsri';
            }  else if (this.classList.contains('planWB')) {
                claseEspecifica = 'planWB';
            } else if (this.classList.contains('inter')) {
                claseEspecifica = 'inter';
            } 

            // Mostrar todas las imágenes con la clase específica
            if (claseEspecifica !== '') {
                document.querySelectorAll("." + claseEspecifica).forEach(function (image) {
                    if (image !== img) {
                        var newImg = document.createElement("img");
                        newImg.src = image.src;
                        newImg.style.width = "100%";
                        newImg.style.marginTop = "10px";
                        modalImg.insertAdjacentElement('afterend', newImg);
                    }
                });
            }
        }
    });


    //cuando el usuario hace click en cualquier espacio del modal, que se cierre.
    modal.onclick = function () {
        modal.style.display = "none";
    }
});