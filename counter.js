function initializeCounter() {
    const coutners = document.querySelectorAll('.bb-counter');

    coutners.forEach(counter => {
        counter.textContent = counter.textContent.replace(",", "");

        var snapAmount = 1;
        const splitTextContent = String(counter.textContent).split(".");
        if (splitTextContent.length != 1) {
            snapAmount = "0." + "0".repeat(splitTextContent[1].length - 1) + "1";
        }

        gsap.registerPlugin(ScrollTrigger);
        gsap.from(counter, {
            textContent: 0,
            duration: 1,
            snap : {
                textContent: snapAmount
            },
            scrollTrigger: {
                trigger: counter,
                start: "top 70%",
                end: "99% bottom",
            },
            onUpdate : () => {
                counter.textContent = Number(counter.textContent).toLocaleString();
            },
        });

    });
}

document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.bb-counter')) return;

    initializeCounter();
});
