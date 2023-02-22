import React from 'react';
import { Wrapper } from './CreateProject.styled';
import CloseIcon from '@mui/icons-material/Close';
export const CreateProject = ({ setVisibility }: any) => {
  return (
    <Wrapper>
      <div className="overlay" onClick={() => setVisibility(false)}></div>
      <div className="content" onClick={() => setVisibility(false)}>
        <div className="close">
          <CloseIcon className="ic" />
        </div>
        <div className="title">Create Project</div>
        <div className="items first">
          <div className="item">
            <div className="label">Project Name</div>
            <input type="text" className="value" />
          </div>
          <div className="item">
            <div className="label">Client</div>

            <select className="value">
              <option value="cc">cc</option>
              <option value="cc">cc</option>
              <option value="cc">cc</option>
              <option value="cc">cc</option>
            </select>
          </div>
          <div className="item">
            <div className="label">Start Date</div>

            <input type="text" className="value" />
          </div>
          <div className="item">
            <div className="label">End Date</div>

            <input type="text" className="value" />
          </div>
          <div className="item secondary">
            <div className="item">
              <div className="label">End Date</div>

              <input type="text" className="value" />
            </div>
            <div className="item">
              <div className="label">End Date</div>

              <input type="text" className="value" />
            </div>
          </div>
          <div className="item third">
            <div className="item">
              <div className="label">End Date</div>

              <input type="text" className="value" />
            </div>
          </div>
          <div className="item third">
            <div className="item">
              <div className="label">End Date</div>

              <input type="text" className="value" />
            </div>
          </div>
          <div className="item"></div>
          <div className="item third">
            <div className="item">
              <div className="label">End Date</div>

              <input type="text" className="value" />
            </div>
          </div>
          <div className="item"></div>
        </div>
        <div className="desc">
          <div className="item">
            <div className="label">End Date</div>
            <textarea
              className="value"
              placeholder="Enter your message here"
            ></textarea>
          </div>
        </div>
        <div className="btn-create-wrapper">
          <div className="btn">Create</div>
        </div>
      </div>
    </Wrapper>
  );
};
