// U89173488

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get the values from the form
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Validate the form fields
    if (name === '' || rating === '' || comments === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Create a new feedback item
    const feedbackItem = document.createElement('div');
    feedbackItem.classList.add('feedback-item');

    const feedbackContent = `
        <h3>${name}</h3>
        <p>Rating: ${rating}</p>
        <p>${comments}</p>
    `;
    feedbackItem.innerHTML = feedbackContent;

    // Append the new feedback item to the display area
    document.getElementById('feedbackDisplay').appendChild(feedbackItem);

    // Clear the form fields
    document.getElementById('feedbackForm').reset();
});
