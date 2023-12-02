import { Route, Routes } from "react-router-dom"
import { EmployeesPage } from "../Pages/EmployeesPage"
import { HomePage } from "../Pages/HomePage"
import { RegisterPage } from "../Pages/RegisterPage"
import { EmployeeDetail } from "../Pages/EmployeeDetail"
import { EditForm } from "../components/editEmployee/EditForm"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/empleados" element={<EmployeesPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/empleado" element={<EmployeeDetail />} />
        <Route path="/editEmpleado" element={<EditForm />} />
    </Routes>
  )
}
