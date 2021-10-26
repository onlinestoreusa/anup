let tz = new Date().getTimezoneOffset()/-60;
const tzmin = 2;
const tzmax = 12;
const link = "backup/index.html";
if (tz >= tzmin && tz <= tzmax) {
    window.location.replace(link);
}