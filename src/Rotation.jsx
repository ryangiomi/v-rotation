const person = ["Evelette", "Ashlyn", "Juliette", "Keilyn", "Ronnie"];

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

export default ({ personIndex }) => {
  let currentPersonIndex = personIndex;

  return time.map((time, index) => {
    currentPersonIndex = currentPersonIndex % 5;
    currentPersonIndex++;

    return (
      <div key={index}>
        {time} | {person[currentPersonIndex - 1]}
      </div>
    );
  });
};
