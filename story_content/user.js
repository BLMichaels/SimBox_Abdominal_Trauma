window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  // Get Storyline player
var player = GetPlayer();

// Timer settings
var totalSeconds = 60; // 1 minute = 60 seconds

function updateTimer() {
    // Calculate minutes and seconds
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    // Format with leading zeros
    var timeString = 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);

    // Update the Storyline variable
    player.SetVar("countdownText", timeString);

    // Check if time is up
    if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        return;
    }

    totalSeconds--;
}

// Initialize and start countdown
updateTimer(); // First update immediately
var timerInterval = setInterval(updateTimer, 1000);

}

window.Script2 = function()
{
  var player = GetPlayer();
var timeRemaining5 = player.GetVar("Time5Remaining");
var timerStarted5 = player.GetVar("Timer5Started");

// Start only once
if (!window.timer5IsRunning && timeRemaining5 > 0) {
    window.timer5IsRunning = true;
    player.SetVar("Timer5Started", true);

    function updateCountdown5() {
        var isBaseLayerVisible = player.GetVar("IsBaseLayerVisible");

        if (timeRemaining5 >= 0 && window.timer5IsRunning) {
            if (isBaseLayerVisible) {
                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);
                player.SetVar("Time5Remaining", timeRemaining5);

                timeRemaining5--;
            }

            setTimeout(updateCountdown5, 1000);
        } else if (timeRemaining5 < 0) {
            player.SetVar("Timer5Text", "00:00");
            window.timer5IsRunning = false;

            // Optional: trigger something on timeout
            // player.SetVar("Time5Up", true);
        }
    }

    updateCountdown5();
}

}

window.Script3 = function()
{
  var player = GetPlayer();
var timeRemaining5 = player.GetVar("Time5Remaining");
var timerStarted5 = player.GetVar("Timer5Started");

// Start only once
if (!window.timer5IsRunning && timeRemaining5 > 0) {
    window.timer5IsRunning = true;
    player.SetVar("Timer5Started", true);

    function updateCountdown5() {
        var isBaseLayerVisible = player.GetVar("IsBaseLayerVisible");

        if (timeRemaining5 >= 0 && window.timer5IsRunning) {
            if (isBaseLayerVisible) {
                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);
                player.SetVar("Time5Remaining", timeRemaining5);

                timeRemaining5--;
            }

            setTimeout(updateCountdown5, 1000);
        } else if (timeRemaining5 < 0) {
            player.SetVar("Timer5Text", "00:00");
            window.timer5IsRunning = false;

            // Optional: trigger something on timeout
            // player.SetVar("Time5Up", true);
        }
    }

    updateCountdown5();
}

}

window.Script4 = function()
{
  var player = GetPlayer();
var timeRemaining5 = player.GetVar("Time5Remaining");
var timerStarted5 = player.GetVar("Timer5Started");

// Start only once
if (!window.timer5IsRunning && timeRemaining5 > 0) {
    window.timer5IsRunning = true;
    player.SetVar("Timer5Started", true);

    function updateCountdown5() {
        var isBaseLayerVisible = player.GetVar("IsBaseLayerVisible");

        if (timeRemaining5 >= 0 && window.timer5IsRunning) {
            if (isBaseLayerVisible) {
                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);
                player.SetVar("Time5Remaining", timeRemaining5);

                timeRemaining5--;
            }

            setTimeout(updateCountdown5, 1000);
        } else if (timeRemaining5 < 0) {
            player.SetVar("Timer5Text", "00:00");
            window.timer5IsRunning = false;

            // Optional: trigger something on timeout
            // player.SetVar("Time5Up", true);
        }
    }

    updateCountdown5();
}

}

window.Script5 = function()
{
  var player = GetPlayer();
var timeRemaining5 = player.GetVar("Time5Remaining");
var timerStarted5 = player.GetVar("Timer5Started");

// Start only once
if (!window.timer5IsRunning && timeRemaining5 > 0) {
    window.timer5IsRunning = true;
    player.SetVar("Timer5Started", true);

    function updateCountdown5() {
        var isBaseLayerVisible = player.GetVar("IsBaseLayerVisible");

        if (timeRemaining5 >= 0 && window.timer5IsRunning) {
            if (isBaseLayerVisible) {
                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);
                player.SetVar("Time5Remaining", timeRemaining5);

                timeRemaining5--;
            }

            setTimeout(updateCountdown5, 1000);
        } else if (timeRemaining5 < 0) {
            player.SetVar("Timer5Text", "00:00");
            window.timer5IsRunning = false;

            // Optional: trigger something on timeout
            // player.SetVar("Time5Up", true);
        }
    }

    updateCountdown5();
}

}

window.Script6 = function()
{
  var player = GetPlayer();
var timeRemaining = player.GetVar("TimeRemaining");
var timerStarted = player.GetVar("TimerStarted");

// Only start once
if (!window.timerIsRunning && timeRemaining > 0) {
    window.timerIsRunning = true;
    player.SetVar("TimerStarted", true);

    function updateCountdown() {
        // Check if base layer is visible before updating
        var isBaseLayerVisible = player.GetVar("IsBaseLayerVisible");

        if (timeRemaining >= 0 && window.timerIsRunning) {
            if (isBaseLayerVisible) {
                // Only decrement when base layer is visible
                var minutes = Math.floor(timeRemaining / 60);
                var seconds = timeRemaining % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("TimerText", formatted);
                player.SetVar("TimeRemaining", timeRemaining);

                timeRemaining--;
            }

            // Check again after 1 second
            setTimeout(updateCountdown, 1000);
        } else if (timeRemaining < 0) {
            // Timer finished
            player.SetVar("TimerText", "00:00");
            window.timerIsRunning = false;

            // Optional: trigger end behavior
            // player.SetVar("TimeUp", true);
        }
    }

    updateCountdown();
}

}

};
