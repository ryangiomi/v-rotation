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
        className="rotation-grid"
        key={index}
        style={{
          display: "grid",
          gridRowStart: 1,
          gridRowEnd: 2,
          gridColumnStart: 1,
          gridColumnEnd: 3,
        }}
      >
        <span
          style={{
            display: "grid",
            gridRowStart: 1,
            gridRowEnd: 2,
            gridColumnStart: 1,
            gridColumnEnd: 2,
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
            justifyContent: "left",
            width: "100px",
          }}
        >
          {/* {person.indexOf(index[personIndex]) + 1} */}
          {person[currentPersonIndex - 1]}
        </span>
      </div>
    );
  });
};
