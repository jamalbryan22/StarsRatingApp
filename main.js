const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  phillips: 4.1,
};

// Total Stars
const starsTotal = 5;

// Product select
const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

// Placeholder for product
let product;

// Prooduct select change
productSelect.addEventListener("change", (e) => {
  product = e.target.value;
  // Enable rating control
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

// Rating Control Change
ratingControl.addEventListener("blur", (e) => {
  const rating = e.target.value;

  // bounds check
  if (rating > 5) {
    alert("Please rate 1-5");
    return;
  }

  // Change Rating
  ratings[product] = rating;
  getRatings();
});

// Run getRatings when DOM loads
document.addEventListener("DOMContentLoaded", getRatings);

// Get Ratings
function getRatings() {
  for (let rating in ratings) {
    // Get percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;
    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    // Set width of stars inner to percentage
    document.querySelector(
      `.${rating} .stars-inner`
    ).style.width = starPercentageRounded;
    // Add rating stars
    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}
