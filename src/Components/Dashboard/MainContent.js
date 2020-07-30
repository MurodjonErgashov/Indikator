import React, { Component } from "react";
import Footer from "../Footer";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import PageTitle from "./PageTitle";

class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="page-content">
          {/* <!-- Page-Title --> */}
          <PageTitle />
          {/* <!-- end page title end breadcrumb --> */}

          <div className="page-content-wrapper">
            <div className="container-fluid">
              {/* Row 1 */}
              <Row1 />
              {/* <!-- end row --> */}
              {/* Row 2 */}
              <Row2 />
              {/* <!-- end row --> */}

              {/* Row 3 */}
              <Row3 />
              {/* <!-- end row --> */}
            </div>
            {/* <!-- container-fluid --> */}
          </div>
          {/* <!-- end page-content-wrapper --> */}
        </div>
        {/* <!-- End Page-content --> */}

        <Footer />
      </div>
    );
  }
}

export default MainContent;
