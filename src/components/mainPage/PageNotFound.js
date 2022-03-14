/*
 * If the url does not match with '/Webreport' this html will be shown
 */
function PageNotFound() {
  return (
    <div className="page-not-found-cont">
      <div className="page-not-found-content">
        <div>
          <h1 className="page-not-found-404">4<span className="page-not-found-cero">0</span>4</h1>
          <h2 className="page-not-found-404">Page Not Found</h2>
        </div>
        <p className="page-not-found-message">Oops! The page you were trying to lookin for does not exist.</p>
        <a className="page-not-found-goHome" href="/home"><i className="icon-home"></i>Go back to Home.</a>
      </div>
    </div>
  );
}

export default PageNotFound;
