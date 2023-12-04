import { Route, Routes } from "react-router-dom"
import { EmployeesPage } from "../Pages/EmployeesPage"
import { DelegadosPage } from "../Pages/DelegadosPage"
import { HomePage } from "../Pages/HomePage"
import { RegisterPage } from "../Pages/RegisterPage"
import { EmployeeDetail } from "../Pages/EmployeeDetail"
import { EditForm } from "../components/editEmployee/EditForm"
import { DependientesPage } from "../Pages/DependientesPage"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/empleados" element={<EmployeesPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/empleado" element={<EmployeeDetail />} />
        <Route path="/editEmpleado" element={<EditForm />} />
        <Route path="/delegados" element={<DelegadosPage />} />
        <Route path="/dependientes" element={<DependientesPage />} />
    </Routes>
  )
}
