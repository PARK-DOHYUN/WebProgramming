import React from "react";

const styles = {
  mainContainer: {
    background: "white",
    padding: 20,
    borderRadius: 10,
    maxWidth: 600,
    margin: "0 auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  textContents: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
  },
};

function MyImage(props) {
  return (
    <div style={styles.imageContainer}>
      <img style={styles.image} src={props.src} alt={props.alt} />
    </div>
  );
}

function Content(props) {
  return (
    <div>
      <h1 style={styles.textContents}>{props.name}</h1>
      <p style={styles.textContents}>{props.introduce}</p>
      <br />
      <h1 style={styles.textContents}>목표</h1>
      <p style={styles.textContents}>{props.goals}</p>
    </div>
  );
}

function Contact(props) {
  return (
    <div>
      <p style={styles.textContents}>email : {props.email}</p>
      <p style={styles.textContents}>github : {props.github}</p>
    </div>
  );
}

function Infomation(props) {
  return (
    <div style={styles.mainContainer}>
      <hr />
      <MyImage src={props.src} alt={props.alt} />
      <Content
        name={props.name}
        introduce={props.introduce}
        goals={props.goals}
      />
      <hr />
      <Contact email={props.email} github={props.github} />
    </div>
  );
}

export default Infomation;
