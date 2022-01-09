/// Reusable page title component accepts title(str) and intro(str) props; intro(str) only displayed if passed as prop ///

/// <PageTitle title="..." intro="..."></PageTitle ///

function PageTitle(props) {

return (
  <div className="page-title">
    <div className="container-fluid">
        <h1>{props.title}</h1>
        <hr className="bg-light w-75 mx-auto" />
    </div>
    {props.intro &&
      <div className="container-fluid">
        <p>{props.intro}</p>
        <hr className="bg-light w-75 mx-auto" />
      </div>
     }
  </div>
  )
}

export default PageTitle;