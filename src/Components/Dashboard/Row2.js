import React from "react";

function Row2() {
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card">
          <div className="card-header bg-transparent p-3">
            <h5 className="header-title mb-0">Sales Status</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="media my-2">
                <div className="media-body">
                  <p className="text-muted mb-2">Number of Sales</p>
                  <h5 className="mb-0">1,625</h5>
                </div>
                <div className="icons-lg ml-2 align-self-center">
                  <i className="uim uim-layer-group"></i>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media my-2">
                <div className="media-body">
                  <p className="text-muted mb-2">Sales Revenue</p>
                  <h5 className="mb-0">$ 42,235</h5>
                </div>
                <div className="icons-lg ml-2 align-self-center">
                  <i className="uim uim-analytics"></i>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media my-2">
                <div className="media-body">
                  <p className="text-muted mb-2">Average Price</p>
                  <h5 className="mb-0">$ 14.56</h5>
                </div>
                <div className="icons-lg ml-2 align-self-center">
                  <i className="uim uim-ruler"></i>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media my-2">
                <div className="media-body">
                  <p className="text-muted mb-2">Product Sold</p>
                  <h5 className="mb-0">8,235</h5>
                </div>
                <div className="icons-lg ml-2 align-self-center">
                  <i className="uim uim-box"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="header-title mb-4">Social Source</h5>
            <div id="radial-chart" className="apex-charts"></div>

            <div className="text-center mt-3">
              <div className="row">
                <div className="col-6">
                  <div>
                    <p className="text-muted">
                      <i className="mdi mdi-circle text-primary mr-1"></i>
                      Facebook
                    </p>
                    <h5>$ 1,625</h5>
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <p className="text-muted">
                      <i className="mdi mdi-circle text-warning mr-1"></i>
                      Twitter
                    </p>
                    <h5>$ 1,504</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="header-title">Recent Activity</h5>

            <div id="activity-chart" className="apex-charts"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row2;
