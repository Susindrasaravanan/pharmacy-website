let locationButton = document.getElementById("get-location");
let locationDiv = document.getElementById("location-details");

locationButton.addEventListener("click", () => {
    //Geolocation APU is used to get geographical position of a user and is available inside the navigator object
    if (navigator.geolocation) {
        //returns position(latitude and longitude) or error
        navigator.geolocation.getCurrentPosition(showLocation, checkError);
    } else {
        //For old browser i.e IE
        locationDiv.innerText = "The browser does not support geolocation";
    }
});

//Error Checks
const checkError = (error) => {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            locationDiv.innerText = "Please allow access to location";
            break;
        case error.POSITION_UNAVAILABLE:
            //usually fired for firefox
            locationDiv.innerText = "Location Information unavailable";
            break;
        case error.TIMEOUT:
            locationDiv.innerText = "The request to get user location timed out";
    }
};

const showLocation = async (position) => {
    //We user the NOminatim API for getting actual addres from latitude and longitude
    let response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
    );
    //store response object
    let data = await response.json();
    locationDiv.innerText = `${data.address.city}, ${data.address.country}`;
};