import React from "react";

function Row1() {
  return (
    <div className="row">
      <div className="col-xl-4">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <h5>Welcome Back !</h5>
                <p className="text-muted">Xoric Dashboard</p>

                <div className="mt-4">
                  <a href="#" className="btn btn-primary btn-sm">
                    View more
                    <i className="mdi mdi-arrow-right ml-1"></i>
                  </a>
                </div>
              </div>

              <div className="col-5 ml-auto">
                <div>
                  <img
                    src="assets/images/widget-img.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="header-title mb-4">Monthy sale Report</h5>
            <div className="media">
              <div className="media-body">
                <p className="text-muted mb-2">This month Sale</p>
                <h4>$ 13,425</h4>
              </div>
              <div dir="ltr" className="ml-2">
                <input
                  data-plugin="knob"
                  data-width="56"
                  data-height="56"
                  data-linecap="round"
                  data-displayInput="false"
                  data-fgColor="#3051d3"
                  value="56"
                  data-skin="tron"
                  data-angleOffset="56"
                  data-readOnly="true"
                  data-thickness=".17"
                />
              </div>
            </div>
            <hr />
            <div className="media">
              <div className="media-body">
                <p className="text-muted">Sale status</p>
                <h5 className="mb-0">
                  + 12 %
                  <span className="font-size-14 text-muted ml-1">
                    From previous period
                  </span>
                </h5>
              </div>

              <div className="align-self-end ml-2">
                <a href="#" className="btn btn-primary btn-sm">
                  View more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-8">
        <div className="card">
          <div className="card-body">
            <form className="form-inline float-right">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-sm datepicker-here"
                  data-range="true"
                  data-multiple-dates-separator=" - "
                  data-language="en"
                  placeholder="Select Date"
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="far fa-calendar font-size-12"></i>
                  </span>
                </div>
              </div>
            </form>
            <h5 className="header-title mb-4">Sales Report</h5>
            <div id="yearly-sale-chart" className="apex-charts"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row1;
