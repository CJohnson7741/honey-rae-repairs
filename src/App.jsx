import "./App.css";
import "./components/tickets/Ticket.css";
import "./components/customers/Customers.css";
import "./users/user.css";
import "./employees/employee.css";
import { CustomerList } from "./components/customers/CustomersList";
import { TicketList } from "./components/tickets/TicketList";
import { EmployeeList } from "./employees/employee";

export const App = () => {
  return (
    <>
      {
        //<TicketList />
        //<CustomerList />
        <EmployeeList />
      }
    </>
  );
};
