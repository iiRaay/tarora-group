document.addEventListener('DOMContentLoaded',function(){

    var anniversaryModal = new bootstrap.Modal(document.getElementById('anniversaryModal'));
    var stillModal = new bootstrap.Modal(document.getElementById('still-images-popup'));
    var drawModal = new bootstrap.Modal(document.getElementById('drawModal'));
    const drawImage = document.getElementById('draw-still') 
    anniversaryModal.show(); 
    setTimeout(function(){
      anniversaryModal.hide();
      stillModal.show()
    },4500);

    drawImage.addEventListener('click', function(){
        drawModal.show();
        stillModal.hide();
    });
});