import React, { memo } from 'react';
import { SidebarLayout } from 'components';

import { Wrapper } from './Attendance.styled';

import {
  Grid,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { TextField } from '@mui/material';
import {
  IProject,
  useGetAllProjects,
  useGetStudentOfProject2,
} from 'queries/useProjects';
import { IEmployee } from 'modules/Employee/Employee';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}
interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

const columns: readonly Column[] = [
  { id: '1', label: '1', minWidth: 10 },
  { id: '1', label: '2', minWidth: 10 },
  { id: '1', label: '3', minWidth: 10 },
  { id: '1', label: '4', minWidth: 10 },
  { id: '1', label: '1', minWidth: 10 },
  { id: '1', label: '1', minWidth: 10 },
  { id: '1', label: '1', minWidth: 10 },
  { id: '1', label: '1', minWidth: 10 },
  { id: '1', label: '1', minWidth: 10 },
  { id: '1', label: '1', minWidth: 10 },
];
const Attendance = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [listProject, setListProject] = React.useState<Array<IProject>>([]);
  const [listStudent, setListStudent] = React.useState<Array<IEmployee>>([]);
  const [activeProject, setActiveProject] = React.useState<string>('');
  const onGetAllProject = useGetAllProjects();
  const onGetStudentOfProject = useGetStudentOfProject2();
  React.useEffect(() => {
    onGetAllProject().then((rs: any) => {
      setListProject(rs);
    });
  }, []);
  React.useEffect(() => {
    if (listProject) {
      setActiveProject(listProject[0]?._id);
    }
  }, [listProject]);
  React.useEffect(() => {
    if (activeProject) {
      onGetStudentOfProject(activeProject).then((rs: any) => {
        if (rs) {
          setListStudent(rs);
        }
      });
    }
  }, [activeProject]);

  console.log(activeProject);

  return (
    <SidebarLayout>
      <Wrapper>
        <span className="welcome">Attendance</span>
        <span className="breadcrumb">Dashboard / Attendance</span>
        <Grid spacing={3} className="grid" container>
          <Grid item xs={9}>
            <TextField
              fullWidth
              className="select-major"
              id="outlined-select-currency-native"
              select
              onChange={(e: any) => setActiveProject(e.target.value)}
              helperText="Please select your specific project"
            >
              {listProject?.map((option, key) => (
                <MenuItem key={key} value={option._id}>
                  {option.projectName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listStudent?.map((st: any, key: any) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                        <TableCell>{st?.firstName}</TableCell>
                        <TableCell>{st?.firstName}</TableCell>
                        <TableCell>{st?.firstName}</TableCell>
                        <TableCell>{st?.firstName}</TableCell>
                        <TableCell>{st?.firstName}</TableCell>
                        <TableCell>{st?.firstName}</TableCell>
                        <TableCell>{st?.firstName}</TableCell>
                        <TableCell>{st?.firstName}</TableCell>
                        <TableCell>{st?.firstName}</TableCell>
                        <TableCell>{st?.firstName}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Wrapper>
    </SidebarLayout>
  );
};

export default memo(Attendance);
