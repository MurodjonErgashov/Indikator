import React from "react";

function PageTitle() {
  return (
    <div className="page-title-box">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Header Pastidagi yozuv */}
          <div className="col-md-8">
            <h4 className="page-title mb-1">Dashboard</h4>
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item active">
                Welcome to Xoric Dashboard
              </li>
            </ol>
          </div>
          {/* Settings Button .... */}
          <div className="col-md-4">
            <div className="float-right d-none d-md-block">
              <div className="dropdown">
                <button
                  className="btn btn-light btn-rounded dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-settings-outline mr-1"></i>
                  Settings
                </button>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ........................ */}
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
