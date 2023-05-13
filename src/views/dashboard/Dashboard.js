import React, { lazy, useEffect } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router';
import { CChartPie } from '@coreui/react-chartjs';

const data = {
  labels: ['20-29', '30-29', '40-49', '50-59'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100, 200],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    },
  ],
};

const Dashboard = () => {

  const history = useHistory();
  
  useEffect(() => {
    let flag = localStorage.getItem(`LoginProcess`)
    if(flag != "true"){
      history.push(`/Login`);
    }
}, );
  return (
    <>
     
    <p>Employee's age chart</p>
    <CChartPie
      datasets={data.datasets}
      labels={data.labels}
      options={{
        tooltips: {
          enabled: true,
        },
      }}
    />
    </>
  )
}

export default Dashboard
