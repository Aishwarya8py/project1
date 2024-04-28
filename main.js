 // Example: Rotate product cards on hover
// productCards.forEach((card) => {
 //   card.addEventListener('mouseenter', () => {
 //       card.style.transform = 'rotateY(10deg)';
 //   });

//    card.addEventListener('mouseleave', () => {
 //       card.style.transform = 'rotateY(0)';
 //   });
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const modalAddToCart = document.getElementById('modal-add-to-cart');
    const closeModal = document.getElementsByClassName('close')[0];

    const carouselItems = document.querySelectorAll('.carousel-item');

    carouselItems.forEach(item => {
        const button = item.querySelector('.view-details');
        button.addEventListener('click', function() {
            const productId = button.getAttribute('data-product');
            showModal(productId);
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function showModal(productId) {
        // Fetch product details using productId
        // For demo, using static data
        const product = {
            id: productId,
            image: `product${productId}.jpg`,
            title: `Product ${productId}`,
            description: `Description of Product ${productId}`,
            price: `$X.XX`
        };

        modalImage.src = product.image;
        modalTitle.textContent = product.title;
        modalDescription.textContent = product.description;
        modalPrice.textContent = `Price: ${product.price}`;
        modal.style.display = 'block';
    }
    //Example: Rotate product cards on hover
productCards.forEach((card) => {

card.addEventListener('mouseenter', () => {
card.style.transform = 'rotateY(10deg)';
});

card.addEventListener('mouseleave', () => {
card.style.transform = 'rotateY(0)';
});
});


});
