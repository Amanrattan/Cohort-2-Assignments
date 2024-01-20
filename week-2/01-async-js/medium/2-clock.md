Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


let time;
<!-- //setInterval(() => { ... }, 1000);: Sets up an interval that runs the provided function every 1000 milliseconds (1 second). -->
setInterval(() => {
  const now = new Date();
  <!-- Creates a new Date object representing the current date and time. -->
  time = now.toLocaleTimeString();
  <!-- : Formats the current time as a string using toLocaleTimeString. This method converts the time portion of a Date object into a string using the current locale's conventions. -->
  console.clear();
  console.log(time);
}, 1000);