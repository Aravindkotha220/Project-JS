document.addEventListener("DOMContentLoaded", () => {
  const signInBtn = document.querySelector(".btn-outline");
  const signUpBtn = document.querySelector(".btn-fill");

  signInBtn.addEventListener("click", () => {
    alert("Redirecting to Sign In page...");
    // window.location.href = "/signin"; // Uncomment to redirect
  });

  signUpBtn.addEventListener("click", () => {
    alert("Redirecting to Sign Up page...");
    // window.location.href = "/signup"; // Uncomment to redirect
  });

  // OPTIONAL: Mobile nav toggle (if you add a hamburger menu)
  // const mobileToggle = document.querySelector(".mobile-toggle");
  // const navSections = document.querySelectorAll(".navbar-left, .navbar-center, .navbar-right");

  // mobileToggle?.addEventListener("click", () => {
  //   navSections.forEach(section => section.classList.toggle("open"));
  // });
});

const optionButtons = document.querySelectorAll('.option-btn');
optionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    optionButtons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

// Add more logic as needed
document.querySelector('.inspire-btn').addEventListener('click', () => {
  alert('Get inspired!');
});

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll('.grid-container .item');

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.boxShadow = 'none';
    });
  });
});