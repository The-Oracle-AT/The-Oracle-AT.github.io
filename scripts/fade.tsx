// Description: Fade in elements when they are visible in the viewport
function IsElementInView(elementClass: string) {
    const observer = new IntersectionObserver((entries) => {
        try {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            })
        } catch (error) {
            console.log(error);
        }
    });
    const hiddenElements = document.querySelectorAll(elementClass);
    hiddenElements.forEach((element) => {observer.observe(element);});
}
export default IsElementInView;
