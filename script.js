// 필요한 HTML 요소들을 가져옵니다.
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("expandedImg");
const closeBtn = document.getElementsByClassName("close")[0];
const galleryImages = document.querySelectorAll(".gallery-item img");

// 전시된 모든 사진에 클릭 이벤트를 추가합니다.
galleryImages.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block";  // 모달 창을 보여줌
        modalImg.src = this.src;        // 클릭한 사진의 주소를 모달 이미지 주소로 설정
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