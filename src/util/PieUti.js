
import { useEffect } from "react";

import { useSelector,useDispatch  } from "react-redux";

import { getPocCount } from "../redux/features/dashboard/dashboard.feature";

export default function PieUtil(){

const dispatch = useDispatch();

export default const {
  pocCount
} = useSelector((store) => {
  return store["dashboard"];
});
useEffect(() => {
  dispatch(getPocCount());
}, []);
console.log("Data from PieChart : ", pocCount);
return(
    <>
    {pocCount}
    </>
)

}