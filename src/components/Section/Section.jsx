function Section({ title, children }) {
  return (
    <div className="feedbackWrapper">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Section;
