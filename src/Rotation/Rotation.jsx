import personIndex from "./startRotation";

const person = ["Juliette", "Ronnie", "Ashlyn", "Keilyn", "Evelette"];

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
  "2300"
];

export default (props) => {
  let currentPersonIndex = props.personIndex || personIndex;

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
          height: "2rem",
          width: "200px"
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
            width: "100px"
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
            width: "100px"
          }}
        >
          {person[currentPersonIndex - 1]}
        </span>
      </div>
    );
  });
};
