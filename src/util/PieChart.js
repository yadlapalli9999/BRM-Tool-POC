import React from "react";
import Chart from "react-apexcharts";

// import { useSelector, } from "react-redux";
// import { useDispatch } from "react-redux";
// import { 
//   getPocCount } from "../redux/features/dashboard/dashboard.feature";

// export default function PieChart() {

//   const dispatch = useDispatch();
//   const {
//     pocCount,
//     loading,
//   } = useSelector((store) => {
//     return store["dashboard"];
//   });
  
//   useEffect(() => {
//     dispatch(getPocCount());
//   }, []);


  export default function PieChart() {
  return React.createElement(Chart, {
    type: "donut",
    series: [50,15,10,25],
    options: {
      labels: ["Active", "Initiated", "IActive", "Completed"],
      legend: {
        show: true,
        position:"top",
        fontWeight: "400",
      },
      colors: ["#ff5722","#FFCB42",  "#FF1E00","#2B7A0B"]
    }
  });
}


{/*   
  {
     loading ? (
      <div className="text-center" style={{ marginTop: "4rem" }}>
        <MDBSpinner role="status" color="primary">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
        <div>Fetching Dashboard data...</div>
      </div>
    ) :(
      {
      
        pocCount?.map( (data) => {
      return React.createElement(Chart, {
        type: "donut",
        series: [{data.ideaPocs},{},{},{}],
        options: {
          labels: ["Active", "Initiated", "IActive", "Completed"],
          legend: {
            show: true,
            position:"top",
            fontWeight: "400",
          },
          colors: ["#ff5722","#FFCB42",  "#FF1E00","#2B7A0B"] ,}
        
        
      }
        }
      )
        }
      )
        }
   */}
