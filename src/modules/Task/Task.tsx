import React, { memo } from 'react';
import { SidebarLayout } from 'components';
import { Wrapper } from './Task.styled';
import AddIcon from '@mui/icons-material/Add';
import { Grid } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const Task = () => {
  return (
    <SidebarLayout>
      <Wrapper>
        <div className="header">
          <div className="header-left">
            <span className="welcome">Project Details</span>
            <span className="breadcrumb">Dashboard / Project</span>
          </div>
          <div className="header-right">
            <div className="add-icon">
              <AddIcon className="icon" />
              Edit Project
            </div>
          </div>
        </div>
        <Grid spacing={3} className="grid" container>
          <Grid item xs={8}>
            <div className="card card-9">
              <div className="card-body">
                <div className="project-title">
                  <h5 className="card-title">New Technology</h5>
                  <small>
                    <span className="text-xs">2 </span>
                    <span className="text-muted">open tasks, </span>
                    <span className="text-xs">5 </span>
                    <span className="text-muted">tasks completed</span>
                  </small>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vel elit neque. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos.
                  Vestibulum sollicitudin libero vitae est consectetur, a
                  molestie tortor consectetur. Aenean tincidunt interdum ipsum,
                  id pellentesque diam suscipit ut. Vivamus massa mi, fermentum
                  eget neque eget, imperdiet tristique lectus. Proin at purus ut
                  sem pellentesque tempor sit amet ut lectus. Sed orci augue,
                  placerat et pretium ac, hendrerit in felis. Integer
                  scelerisque libero non metus commodo, et hendrerit diam
                  aliquet. Proin tincidunt porttitor ligula, a tincidunt orci
                  pellentesque nec. Ut ultricies maximus nulla id consequat.
                  Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor
                  neque id massa porttitor, a pretium velit vehicula. Morbi
                  volutpat tincidunt urna, vel ullamcorper ligula fermentum at.
                </p>
              </div>
            </div>
            <div className="card card-9">
              <div className="card-body">
                <div className="project-title">
                  <h5 className="card-title">Uploaded files</h5>
                </div>
                <div className="file-list">
                  <div className="list-item">
                    <div className="list-left">
                      <a href="#">
                        <UploadFileIcon className="file-icon" />
                      </a>
                    </div>
                    <div className="list-right">
                      <div>
                        <a href="#">
                          AHA Selfcare Mobile Application Test-Cases.xls
                        </a>{' '}
                      </div>
                      <div className="major">
                        <a href="#">John Doe </a> May 31st at 6:53 PM
                      </div>
                      <div>Size: 14.8Mb</div>{' '}
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="list-left">
                      <a href="#">
                        <UploadFileIcon className="file-icon" />
                      </a>
                    </div>
                    <div className="list-right">
                      <div>
                        {' '}
                        <a href="#">
                          AHA Selfcare Mobile Application Test-Cases.xls
                        </a>{' '}
                      </div>
                      <div className="major">
                        <a href="#">John Doe </a> May 31st at 6:53 PM
                      </div>
                      <div>Size: 14.8Mb</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="card">
              <div className="card-body">
                <div className="project-title">
                  <div className="joined-student-title">
                    <h5 className="card-title">Teachers</h5>
                    <div className="add-icon">
                      <AddIcon className="icon" />
                      Add
                    </div>
                  </div>
                  <div className="student-list">
                    <div className="list-item">
                      <div className="list-left">
                        <a href="#">
                          <img
                            className="logo"
                            src={require('assets/images/student/avatar-10.jpg')}
                            alt="Logo"
                          />
                        </a>
                      </div>
                      <div className="list-right">
                        <div>Rash Ford</div>
                        <div className="major">Ford@hcmute.edu.vn</div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="list-left">
                        <a href="#">
                          <img
                            className="logo"
                            src={require('assets/images/student/avatar-13.jpg')}
                            alt="Logo"
                          />
                        </a>
                      </div>
                      <div className="list-right">
                        <div>John Cena</div>
                        <div className="major">John@hcmute.edu.vn</div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="list-left">
                        <a href="#">
                          <img
                            className="logo"
                            src={require('assets/images/student/avatar-11.jpg')}
                            alt="Logo"
                          />
                        </a>
                      </div>
                      <div className="list-right">
                        <div>Wilmer Deluna</div>
                        <div className="major">Wilmer@hcmute.edu.vn</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="project-title">
                  <div className="joined-student-title">
                    <h5 className="card-title">Students</h5>
                    <div className="add-icon">
                      <AddIcon className="icon" />
                      Add
                    </div>
                  </div>
                  <div className="student-list">
                    <div className="list-item">
                      <div className="list-left">
                        <a href="#">
                          <img
                            className="logo"
                            src={require('assets/images/student/avatar-10.jpg')}
                            alt="Logo"
                          />
                        </a>
                      </div>
                      <div className="list-right">
                        <div>Wilmer Deluna</div>
                        <div className="major">Information Technology</div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="list-left">
                        <a href="#">
                          <img
                            className="logo"
                            src={require('assets/images/student/avatar-13.jpg')}
                            alt="Logo"
                          />
                        </a>
                      </div>
                      <div className="list-right">
                        <div>Wilmer Deluna</div>
                        <div className="major">Information Technology</div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="list-left">
                        <a href="#">
                          <img
                            className="logo"
                            src={require('assets/images/student/avatar-11.jpg')}
                            alt="Logo"
                          />
                        </a>
                      </div>
                      <div className="list-right">
                        <div>Wilmer Deluna</div>
                        <div className="major">Information Technology</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Wrapper>
    </SidebarLayout>
  );
};

export default memo(Task);
