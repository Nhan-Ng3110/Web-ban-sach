// Hiển thị / Ẩn form đăng nhập
document.getElementById("login-form").addEventListener("click", function() {
    document.querySelector(".login-form").style.display = "flex";
});

document.getElementById("login-close").addEventListener("click", function() {
    document.querySelector(".login-form").style.display = "none";
});

// Hiển thị / Ẩn form đăng ký
document.getElementById("register-form").addEventListener("click", function() {
    document.querySelector(".register-form").style.display = "flex";
});

document.getElementById("register-close").addEventListener("click", function() {
    document.querySelector(".register-form").style.display = "none";
});


// Giữ thanh header bottom 
const header = document.querySelector(".bottom-header");
const headerOffset = header.offsetTop; // Vị trí ban đầu của header

window.addEventListener("scroll", () => {
    if (window.scrollY > headerOffset) {
        // Khi cuộn xuống, thêm class fixed để giữ header cố định
        header.classList.add("fixed");
        
    } else {
        // Khi quay lại đầu trang, bỏ class fixed để header trở lại vị trí cũ
        header.classList.remove("fixed");
        

    }
});

const images = [
    "./image/home_slider_image_1.jpg",
    "./image/home_slider_image_3.jpg",
    "./image/home_slider_image_4.jpg"
];
 // Danh sách ảnh
let currentIndex = 0;

document.querySelector(".prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("slider-img").src = images[currentIndex];
});

document.querySelector(".next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slider-img").src = images[currentIndex];
});

function updateImage() {
    console.log("Current index:", currentIndex);
    console.log("New image src:", images[currentIndex]);
    document.getElementById("slider-img").src = images[currentIndex];
}


document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function () {
        // Xóa class active của tất cả tab
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        // Thêm class active vào tab được chọn
        this.classList.add("active");

        // Ẩn tất cả nội dung
        document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));
        // Hiển thị nội dung tương ứng
        document.getElementById(this.dataset.tab).classList.add("active");
    });
});
