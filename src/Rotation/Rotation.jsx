import personIndex from "./startRotation";

const index = {
  0: "Juliette",
  1: "Ronnie",
  2: "Ashlyn",
  3: "Keilyn",
  4: "Evelette",
};

// Reversing the array below in order to maintain the index mapping.
const person = ["Ronnie", "Keilyn", "Juliette", "Ashlyn", "Evelette"].reverse();

const time = [
  "0600",
  "0700",
  "0800",
  "0900",
  "1000",
  "1100",
  "1200",
  "1300",
  "1400",
  "1500",
  "1600",
  "1700",
  "1800",
  "1900",
  "2000",
  "2100",
  "2200",
  "2300",
];

function getNormalizedIndex(i) {
  return person.indexOf(index[i]);
}

/**
 * classNameCurrentTime
 *
 * @param {String} scheduleTime
 * @returns "current" when the current time aligns with a scheduled time,
 *          an empty string ("") if the time block is current time.
 */
function classNameCurrentTime(scheduleTime) {
  const currentHour = new Date().getHours();
  const scheduleHour = parseInt(scheduleTime.substring(0, 2), 10);

  // Return a string indicating the current schedule block.
  return currentHour === scheduleHour ? "current" : "";
}


export default (props) => {
  const { personIndex: propsPersonIndex } = props;
  let currentPersonIndex = propsPersonIndex
    ? // Use props.
      getNormalizedIndex(propsPersonIndex)
    : // Use built in.
      getNormalizedIndex(personIndex);

  return time.map((time, index) => {
    currentPersonIndex = currentPersonIndex % 5;
    currentPersonIndex++;

    return (
      <div
        className={`rotation-grid ${classNameCurrentTime(time)}`}
        key={index}
        style={{
          display: "grid",
          gridRowStart: 1,
          gridRowEnd: 2,
          gridColumnStart: 1,
          gridColumnEnd: 3,
          height: "2rem",
          width: "200px",
        }}
      >
        <span
          style={{
            display: "grid",
            gridRowStart: 1,
            gridRowEnd: 2,
            gridColumnStart: 1,
            gridColumnEnd: 2,
            paddingTop: ".4rem",
            width: "100px",
          }}
        >
          {time}
        </span>
        <span
          style={{
            display: "grid",
            gridRowStart: 1,
            gridRowEnd: 2,
            gridColumnStart: 2,
            gridColumnEnd: 3,
            paddingTop: ".4rem",
            justifyContent: "left",
            width: "100px",
          }}
        >
          {person[currentPersonIndex - 1]}
        </span>
      </div>
    );
  });
};
