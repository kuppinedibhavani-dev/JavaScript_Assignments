function timer(duration, onComplete) {
    setTimeout(() => {
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}

// Call the timer function
timer(3000, (message) => {
    console.log(message);
});
