import React, { Component } from "react";

class VertikalMenu extends Component {
  render() {
    return (
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          {/* <!--- Sidemenu --> */}
          <div id="sidebar-menu">
            {/* <!-- Left Menu Start --> */}
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title">Menu</li>

              <li>
                <a href="#" className="waves-effect">
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim uim-airplay"></i>
                  </div>
                  <span className="badge badge-pill badge-success float-right">
                    3
                  </span>
                  <span>Dashboard</span>
                </a>
              </li>

              <li>
                <a href="#" className=" waves-effect">
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim uim-schedule"></i>
                  </div>
                  <span>Calendar</span>
                </a>
              </li>

              <li>
                <a
                  // href="javascript: void(0);"
                  data-toggle="collapse"
                  href="#collapseEmail"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  className="has-arrow waves-effect"
                >
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim uim-comment-message"></i>
                  </div>
                  <span>Email</span>
                </a>
                <ul
                  className="sub-menu collapse"
                  id="collapseEmail"
                  aria-expanded="false"
                >
                  <li>
                    <a href="#">Inbox</a>
                  </li>
                  <li>
                    <a href="#">Email Read</a>
                  </li>
                  <li>
                    <a href="#">Email Compose</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  // href="javascript: void(0);"
                  data-toggle="collapse"
                  className="has-arrow waves-effect"
                  href="#collapseAuth"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim uim-sign-in-alt"></i>
                  </div>

                  <span>Authentication</span>
                </a>
                <ul
                  className="sub-menu collapse"
                  id="collapseAuth"
                  aria-expanded="false"
                >
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Register</a>
                  </li>
                  <li>
                    <a href="#">Recover Password</a>
                  </li>
                  <li>
                    <a href="#">Lock Screen</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  // href="javascript: void(0);"
                  data-toggle="collapse"
                  href="#collapsePages"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  className="has-arrow waves-effect"
                >
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim uim-grids"></i>
                  </div>
                  <span>Pages</span>
                </a>
                <ul
                  className="sub-menu collapse"
                  id="collapsePages"
                  aria-expanded="false"
                >
                  <li>
                    <a href="#">Starter Page</a>
                  </li>
                  <li>
                    <a href="#">Maintenance</a>
                  </li>
                  <li>
                    <a href="#">Coming Soon</a>
                  </li>
                  <li>
                    <a href="#">Timeline</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="pages-404.html">Error 404</a>
                  </li>
                  <li>
                    <a href="pages-500.html">Error 500</a>
                  </li>
                </ul>
              </li>

              <li className="menu-title">Components</li>

              <li>
                <a
                  // href="javascript: void(0);"
                  data-toggle="collapse"
                  href="#collapseBootstrap"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseBootstrap"
                  className="has-arrow waves-effect"
                >
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim uim-box"></i>
                  </div>
                  <span>Bootstrap UI</span>
                </a>
                <ul
                  className="sub-menu collapse"
                  id="collapseBootstrap"
                  aria-expanded="false"
                >
                  <li>
                    <a href="#">Alerts</a>
                  </li>
                  <li>
                    <a href="#">Badge</a>
                  </li>
                  <li>
                    <a href="#">Buttons</a>
                  </li>
                  <li>
                    <a href="#">Cards</a>
                  </li>
                  <li>
                    <a href="#">Dropdowns</a>
                  </li>
                  <li>
                    <a href="#">Navs</a>
                  </li>
                  <li>
                    <a href="#">Tabs &amp; Accordions</a>
                  </li>
                  <li>
                    <a href="#">Modals</a>
                  </li>
                  <li>
                    <a href="#">Images</a>
                  </li>
                  <li>
                    <a href="#">Progress Bars</a>
                  </li>
                  <li>
                    <a href="#">Pagination</a>
                  </li>
                  <li>
                    <a href="#">Popover & Tooltips</a>
                  </li>
                  <li>
                    <a href="#">Spinner</a>
                  </li>
                  <li>
                    <a href="#">Carousel</a>
                  </li>
                  <li>
                    <a href="#">Video</a>
                  </li>
                  <li>
                    <a href="ui-typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="#">Grid</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  // href="javascript: void(0);"
                  data-toggle="collapse"
                  href="#collapseAdvanced"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  className="has-arrow waves-effect"
                >
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim uim-layer-group"></i>
                  </div>
                  <span>Advanced UI</span>
                </a>
                <ul
                  className="sub-menu collapse"
                  id="collapseAdvanced"
                  aria-expanded="false"
                >
                  <li>
                    <a href="#">Alertify</a>
                  </li>
                  <li>
                    <a href="#">Rating</a>
                  </li>
                  <li>
                    <a href="#">Nestable</a>
                  </li>
                  <li>
                    <a href="#">Range Slider</a>
                  </li>
                  <li>
                    <a href="#">Sweet-Alert</a>
                  </li>
                  <li>
                    <a href="#">Lightbox</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  // href="javascript: void(0);"
                  data-toggle="collapse"
                  href="#collapseIcons"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  className="has-arrow waves-effect"
                >
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim uim-object-ungroup"></i>
                  </div>
                  <span>Icons</span>
                </a>
                <ul
                  className="sub-menu collapse"
                  id="collapseIcons"
                  aria-expanded="false"
                >
                  <li>
                    <a href="#">Material Design</a>
                  </li>
                  <li>
                    <a href="#">Dripicons</a>
                  </li>
                  <li>
                    <a href="#">Font Awesome 5</a>
                  </li>
                  <li>
                    <a href="#">Themify</a>
                  </li>
                  <li>
                    <a href="#">Unicons - Dual Tone</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  // href="javascript: void(0);"
                  data-toggle="collapse"
                  href="#collapseTables"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseTables"
                  className="has-arrow waves-effect"
                >
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim uim-table"></i>
                  </div>
                  <span>Tables</span>
                </a>
                <ul
                  className="sub-menu collapse"
                  id="collapseTables"
                  aria-expanded="false"
                >
                  <li>
                    <a href="#">Basic Tables</a>
                  </li>
                  <li>
                    <a href="#">Data Tables</a>
                  </li>
                  <li>
                    <a href="#">Responsive Table</a>
                  </li>
                  <li>
                    <a href="#">Editable Table</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  // href="javascript: void(0);"
                  data-toggle="collapse"
                  href="#collapseForms"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseForms"
                  className="waves-effect"
                >
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim uim-document-layout-left"></i>
                  </div>
                  <span className="badge badge-pill badge-danger float-right">
                    07
                  </span>
                  <span>Forms</span>
                </a>
                <ul
                  className="sub-menu collapse"
                  id="collapseForms"
                  aria-expanded="false"
                >
                  <li>
                    <a href="#">Form Elements</a>
                  </li>
                  <li>
                    <a href="#">Form Validation</a>
                  </li>
                  <li>
                    <a href="#">Form Advanced</a>
                  </li>
                  <li>
                    <a href="#">Form Editors</a>
                  </li>
                  <li>
                    <a href="#">Form File Upload</a>
                  </li>
                  <li>
                    <a href="#">Form Mask</a>
                  </li>
                  <li>
                    <a href="#">Summernote</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  // href="javascript: void(0);"
                  data-toggle="collapse"
                  href="#collapseCharts"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseCharts"
                  className="has-arrow waves-effect"
                >
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim uim-chart-pie"></i>
                  </div>
                  <span>Charts</span>
                </a>
                <ul
                  className="sub-menu collapse"
                  id="collapseCharts"
                  aria-expanded="false"
                >
                  <li>
                    <a href="#">Morris</a>
                  </li>
                  <li>
                    <a href="#">Apex</a>
                  </li>
                  <li>
                    <a href="#">Chartist</a>
                  </li>
                  <li>
                    <a href="#">Chartjs</a>
                  </li>
                  <li>
                    <a href="#">Flot</a>
                  </li>
                  <li>
                    <a href="#">Sparkline</a>
                  </li>
                  <li>
                    <a href="#">Jquery Knob</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  // href="javascript: void(0);"
                  data-toggle="collapse"
                  href="#collapseMaps"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseMaps"
                  className="has-arrow waves-effect"
                >
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim uim-comment-plus"></i>
                  </div>
                  <span>Maps</span>
                </a>
                <ul
                  className="sub-menu collapse"
                  id="collapseMaps"
                  aria-expanded="false"
                >
                  <li>
                    <a href="#">Google map</a>
                  </li>
                  <li>
                    <a href="#">Vector map</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  // href="javascript: void(0);"
                  data-toggle="collapse"
                  href="#collapseLayouts"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                  className="has-arrow waves-effect"
                >
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim uim-window-grid"></i>
                  </div>
                  <span>Layouts</span>
                </a>
                <ul
                  className="sub-menu collapse"
                  id="collapseLayouts"
                  aria-expanded="false"
                >
                  <li>
                    <a href="#">Horizontal</a>
                  </li>
                  <li>
                    <a href="#">Dark Sidebar</a>
                  </li>
                  <li>
                    <a href="#">Small Sidebar</a>
                  </li>
                  <li>
                    <a href="#">Icon Sidebar</a>
                  </li>
                  <li>
                    <a href="#">Colored Sidebar</a>
                  </li>
                  <li>
                    <a href="#">Boxed Layout</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  // href="javascript: void(0);"
                  data-toggle="collapse"
                  href="#collapseMultiLevel"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseMultiLevel"
                  className="has-arrow waves-effect"
                >
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim uim-layers-alt"></i>
                  </div>
                  <span>Multi Level</span>
                </a>
                <ul
                  className="sub-menu collapse"
                  id="collapseMultiLevel"
                  aria-expanded="true"
                >
                  <li>
                    <a href="javascript: void(0);">Level 1.1</a>
                  </li>
                  <li>
                    <a
                      // href="javascript: void(0);"
                      data-toggle="collapse"
                      href="#collapseLevel"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseLevel"
                      className="has-arrow"
                    >
                      Level 1.2
                    </a>
                    <ul
                      className="sub-menu collapse"
                      id="collapseLevel"
                      aria-expanded="true"
                    >
                      <li>
                        <a href="javascript: void(0);">Level 2.1</a>
                      </li>
                      <li>
                        <a href="javascript: void(0);">Level 2.2</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <!-- Sidebar --> */}
        </div>
      </div>
    );
  }
}

export default VertikalMenu;
