// The first Saturday - this is an anchor point in time.
const startingTimeStamp = Date.parse(new Date("10/29/22"));
const currentDate = new Date();

// This returns a number, Sunday (0) thru Saturday (6).
const today = currentDate.getDay();

// Milliseconds in a day.
const msDay = 24 * 60 * 60 * 1000;
let mostRecentSaturdayTimestamp;

// (6 - today): days til next Saturday.
const daysTilNextSaturday = 6 - today;
const daysFromLastSaturday = 7 - daysTilNextSaturday;
const msFromNextSaturday = daysFromLastSaturday * msDay;

mostRecentSaturdayTimestamp = Date.parse(currentDate) - msFromNextSaturday;

const daysFromStartingTimeStamp =
  (mostRecentSaturdayTimestamp - startingTimeStamp) / msDay;

// "5" directly relates to the number of people in the rotation.
const personIndex = Math.floor(daysFromStartingTimeStamp % 5);

export default personIndex;
