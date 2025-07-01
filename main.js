// جلب الزرار
const scrollBtn = document.getElementById("scrollBtn");

// إظهار الزرار عند النزول شوية
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// لما المستخدم يضغط عليه، يطلع فوق
scrollBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
