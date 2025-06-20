// a element 클릭시 href의 값 "#mainContainer" 을 찾아 스크롤 이동하는데 애니메이션을 적용하는 함수
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a.scroll");

    links.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // 기본 동작 방지

            if (this.getAttribute("href") === "#") {
                return; // href가 "#"인 경우 아무 동작도 하지 않음
            }
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });
});
