import { useEffect, useState } from "react";
import { getStaffUsers } from "../services/userService";
import { User } from "../users/User";

export const EmployeeList = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    getStaffUsers().then((staffArray) => {
      setStaff(staffArray);
    });
  }, []);

  return (
    <div className="employees">
      {staff.map((staffObject) => {
        return <User user={staffObject} />;
      })}
    </div>
  );
};
