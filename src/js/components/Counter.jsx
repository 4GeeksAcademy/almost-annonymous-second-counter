function SecondsCounter({ seconds }) {
    const digits = String(seconds).padStart(6, "0").split("");

    return (
        <div style={styles.counter}>
      <div style={styles.icon}>🕑</div>
      {digits.map((digit, index) => (
        <div key={index} style={styles.digit}>
          {digit}
        </div>
      ))}
    </div>
  );
}
const styles = {
    counter: {
      display: "flex",
      background: "black",
      padding: "20px",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      background: "#111",
      color: "white",
      fontSize: "50px",
      width: "60px",
      height: "80px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 5px",
      borderRadius: "10px",
    },
    digit: {
      background: "#111",
      color: "white",
      fontSize: "50px",
      width: "60px",
      height: "80px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 5px",
      borderRadius: "10px",
      fontFamily: "'Courier New', Courier, monospace",
    },
  };

export default SecondsCounter;