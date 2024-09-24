function DefaultLayout({ children }) {
  return (
    <div>
      <h2>Header</h2>
      <div className="container">
        <h2>Sidebar</h2>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
