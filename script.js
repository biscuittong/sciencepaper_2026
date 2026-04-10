const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("expandedImg");
const modalCaption = document.getElementById("modalCaption"); // 캡션 요소 가져오기
const closeBtn = document.getElementsByClassName("close")[0];
const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        
        // 이미지의 전체 주소에서 파일 이름만 추출 (예: images/1.jpg -> 1.jpg)
        const fileName = this.src.substring(this.src.lastIndexOf('/') + 1);
        
        // 추출한 파일 이름을 모달 위쪽 캡션에 텍스트로 넣기
        modalCaption.textContent = fileName;
    });
});

// X 버튼을 누르면 창이 닫힙니다.
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// 사진 바깥의 어두운 배경을 클릭해도 창이 닫힙니다.
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});