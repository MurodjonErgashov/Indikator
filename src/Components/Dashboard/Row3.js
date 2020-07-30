import React from "react";

function Row3() {
  return (
    <div className="row">
      {/* Bir Qism ...........*/}
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">
            <div className="float-right ml-2">
              <a href="#">View all</a>
            </div>
            <h5 className="header-title mb-4">Latest Transaction</h5>

            <div className="table-responsive">
              <table className="table table-centered table-hover mb-0">
                <thead>
                  <tr>
                    <th scope="col">Transaction ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">status</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <a href="#"># XO1345</a>
                    </th>
                    <td>Danny Johnson</td>
                    <td>26 Jan</td>
                    <td>
                      <div className="badge badge-soft-primary">Confirm</div>
                    </td>
                    <td>$124</td>
                    <td>
                      <div className="btn-group" role="group">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="View"
                        >
                          <i className="mdi mdi-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Edit"
                        >
                          <i className="mdi mdi-pencil"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Delete"
                        >
                          <i className="mdi mdi-trash-can"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="#"># XO1346</a>
                    </th>
                    <td>Alvin Newton</td>
                    <td>21 Jan</td>
                    <td>
                      <div className="badge badge-soft-warning">Pending</div>
                    </td>
                    <td>$112</td>
                    <td>
                      <div className="btn-group" role="group">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="View"
                        >
                          <i className="mdi mdi-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Edit"
                        >
                          <i className="mdi mdi-pencil"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Delete"
                        >
                          <i className="mdi mdi-trash-can"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="#"># XO1347</a>
                    </th>
                    <td>Bennie Perez</td>
                    <td>15 Jan</td>
                    <td>
                      <div className="badge badge-soft-primary">Confirm</div>
                    </td>
                    <td>$106</td>
                    <td>
                      <div className="btn-group" role="group">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="View"
                        >
                          <i className="mdi mdi-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Edit"
                        >
                          <i className="mdi mdi-pencil"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Delete"
                        >
                          <i className="mdi mdi-trash-can"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="#"># XO1348</a>
                    </th>
                    <td>Steven Kwon</td>
                    <td>11 Jan</td>
                    <td>
                      <div className="badge badge-soft-primary">Confirm</div>
                    </td>
                    <td>$115</td>
                    <td>
                      <div className="btn-group" role="group">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="View"
                        >
                          <i className="mdi mdi-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Edit"
                        >
                          <i className="mdi mdi-pencil"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Delete"
                        >
                          <i className="mdi mdi-trash-can"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="#"># XO1349</a>
                    </th>
                    <td>Bryan Roark</td>
                    <td>08 Jan</td>
                    <td>
                      <div className="badge badge-soft-danger">Cancel</div>
                    </td>
                    <td>$105</td>
                    <td>
                      <div className="btn-group" role="group">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="View"
                        >
                          <i className="mdi mdi-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Edit"
                        >
                          <i className="mdi mdi-pencil"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Delete"
                        >
                          <i className="mdi mdi-trash-can"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <ul className="pagination pagination-rounded justify-content-center mb-0">
                <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                    <i className="mdi mdi-chevron-left"></i>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <i className="mdi mdi-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ............................ */}
      {/* Ikki Qism .................. */}
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="header-title mb-4">Revenue by Location</h5>

            {/* <div id="usa-map" style="height: 150px;" className="mb-5"></div> */}

            <div className="table-responsive">
              <table className="table table-centered">
                <tbody>
                  <tr>
                    <th scope="row">California</th>
                    <td>$ 8,257</td>
                    <td>
                      <div dir="ltr" className="ml-2">
                        <input
                          data-plugin="knob"
                          data-width="36"
                          data-height="36"
                          data-linecap="round"
                          data-displayInput="false"
                          data-fgColor="#3051d3"
                          value="56"
                          data-skin="tron"
                          data-angleOffset="36"
                          data-readOnly="true"
                          data-thickness=".2"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">New York</th>
                    <td>$ 7,253</td>
                    <td>
                      <div dir="ltr" className="ml-2">
                        <input
                          data-plugin="knob"
                          data-width="36"
                          data-height="36"
                          data-linecap="round"
                          data-displayInput="false"
                          data-fgColor="#3051d3"
                          value="42"
                          data-skin="tron"
                          data-angleOffset="36"
                          data-readOnly="true"
                          data-thickness=".2"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center">
                <a href="#" className="btn btn-primary btn-sm">
                  View more <i className="mdi mdi-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row3;
