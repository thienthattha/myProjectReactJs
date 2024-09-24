function HeaderOnly({ children }) {
  return (
    <div>
      <h2>Header</h2>
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
