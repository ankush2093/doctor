
const progressData = [
    { label: "Diagnostic Accuracy", value: 98 },
    { label: "On-Time Reporting", value: 95 },
    { label: "Patient Satisfaction", value: 97 },
    { label: "Advanced Technology Usage", value: 92 }
];

const wrapper = document.getElementById("progressWrapper");

progressData.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("hm-why-choose-us-progress-item");

    div.innerHTML = `
    <div class="hm-why-choose-us-progress-top">
      <span>${item.label}</span>
      <span>${item.value}%</span>
    </div>
    <div class="hm-why-choose-us-progress-bar">
      <div class="hm-why-choose-us-progress-fill" data-width="${item.value}"></div>
    </div>
  `;

    wrapper.appendChild(div);
});

// Animation
window.addEventListener("load", () => {
    document.querySelectorAll(".hm-why-choose-us-progress-fill")
        .forEach(el => {
            el.style.width = el.getAttribute("data-width") + "%";
        });
});


document.querySelectorAll('.hm-counter-item h3').forEach(el => {
    let target = el.innerText.replace(/\D/g, '');
    let count = 0;

    let interval = setInterval(() => {
        count += Math.ceil(target / 50);
        if (count >= target) {
            el.innerText = el.innerText;
            clearInterval(interval);
        } else {
            el.innerText = count + (el.innerText.includes('+') ? '+' : '%');
        }
    }, 30);
});
