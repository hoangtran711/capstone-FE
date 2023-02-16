import React, { memo } from 'react';
import { SidebarLayout } from 'components';

import { Wrapper } from './Attendance.styled';

import { Grid } from '@mui/material';
import { TextField } from '@mui/material';

const month = [
  {
    value: 'Select Month',
    label: 'Select Month',
  },
  {
    value: 'Jan',
    label: 'Jan',
  },
  {
    value: 'Feb',
    label: 'Feb',
  },
  {
    value: 'Mar',
    label: 'Mar',
  },
  {
    value: 'Apr',
    label: 'Apr',
  },
  {
    value: 'May',
    label: 'May',
  },
  {
    value: 'Jun',
    label: 'Jun',
  },
  {
    value: 'Jul',
    label: 'Jul',
  },
  {
    value: 'Aug',
    label: 'Aug',
  },
  {
    value: 'Sep',
    label: 'Sep',
  },
  {
    value: 'Oct',
    label: 'Oct',
  },
  {
    value: 'Nov',
    label: 'Nov',
  },
  {
    value: 'Dec',
    label: 'Dec',
  },
];

const year = [
  {
    value: 'Select Year',
    label: 'Select Year',
  },
  {
    value: '2023',
    label: '2023',
  },
  {
    value: '2022',
    label: '2022',
  },
  {
    value: '2021',
    label: '2021',
  },
  {
    value: '2020',
    label: '2020',
  },
  {
    value: '2019',
    label: '2019',
  },
  {
    value: '2018',
    label: '2018',
  },
  {
    value: '2017',
    label: '2017',
  },
  {
    value: '2016',
    label: '2016',
  },
  {
    value: '2015',
    label: '2015',
  },
  {
    value: '2014',
    label: '2014',
  },
  {
    value: '2013',
    label: '2013',
  },
  {
    value: '2012',
    label: '2012',
  },
];

const Attendance = () => {
  return (
    <SidebarLayout>
      <Wrapper>
        <span className="welcome">Attendance</span>
        <span className="breadcrumb">Dashboard / Attendance</span>
        <Grid spacing={3} className="grid" container>
          <Grid item xs={3}>
            <TextField
              fullWidth
              className="text-field"
              label="Student Name"
              type="text"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              className="select-major"
              id="outlined-select-currency-native"
              select
              defaultValue="Information Technology"
              SelectProps={{
                native: true,
              }}
            >
              {month.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              className="select-major"
              id="outlined-select-currency-native"
              select
              defaultValue="Information Technology"
              SelectProps={{
                native: true,
              }}
            >
              {year.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={3}>
            <div className="button-search">
              <a href="#">Search</a>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                  <th>11</th>
                  <th>12</th>
                  <th>13</th>
                  <th>14</th>
                  <th>15</th>
                  <th>16</th>
                  <th>17</th>
                  <th>18</th>
                  <th>19</th>
                  <th>20</th>
                  <th>21</th>
                  <th>22</th>
                  <th>23</th>
                  <th>24</th>
                  <th>25</th>
                  <th>26</th>
                  <th>27</th>
                  <th>28</th>
                  <th>29</th>
                  <th>30</th>
                  <th>31</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <h2 className="table-avatar">
                      <a href="#" className="avatar"></a>
                      <a href="#" className="name">
                        Nguyen Hung Dung
                      </a>
                    </h2>
                  </th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </tbody>
            </div>
          </Grid>
        </Grid>
      </Wrapper>
    </SidebarLayout>
  );
};

export default memo(Attendance);
