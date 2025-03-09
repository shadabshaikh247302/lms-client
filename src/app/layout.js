import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./globals.css";
import BootstrapInstall from "./components/Bootstrap install/BootstrapJSinstaller";
import { Toaster } from "react-hot-toast";
import { StudentLoginContextProvider } from "./context/StudentLoginContext";
import { StudentContextProvider } from "./context/studentContext";
import PaymentContextProvider from "./context/PaymentContext";
import { EmiContextProvider } from "./context/EmiContext";
import { CourseContextProvider } from "./context/CourseContext";
// // import { UserContextProvider } from "../../../../techstack-lms/src/app/context/UserContext";
import { MainAdminProvider } from "./context/AdminContext";
// import { LeadContextProvider } from "../../../../techstack-lms/src/app/context/LeadContext";
// import { RoleContextProvider } from "../../../../techstack-lms/src/app/context/RoleContext";
// import { EmployeeContextProvider } from "../../../../techstack-lms/src/app/context/EmployeeContext";
// import PaymentContextProvider from "./context/PaymentContext";
import { EmployeeContextProvider } from "./context/EmployeeContext";
import { RoleContextProvider } from "./context/RoleContext";
import { LeadContextProvider } from "./context/LeadContext";
import { UserContextProvider } from "./context/UserContext";
// import { CourseContextProvider } from "../../../../techstack-lms/src/app/context/CourseContext";
// import { EmiContextProvider } from "../../../../techstack-lms/src/app/context/EmiContext";
// import { StudentLoginContextProvider } from "../../../../techstack-lms/src/app/context/StudentLoginContext";
// import { StudentContextProvider } from "../../../../techstack-lms/src/app/context/StudentContext";
// import { UserContextProvider } from "./context/UserContext";

export const metadata = {
  title: "TechStack Academy",
  description: "Techstack LMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <BootstrapInstall/>
        <StudentLoginContextProvider>
          <StudentContextProvider>
            <PaymentContextProvider>
              <EmiContextProvider>
                <CourseContextProvider>
                  <PaymentContextProvider>
                    <EmployeeContextProvider>
                      <RoleContextProvider>
                        <LeadContextProvider>
                          <MainAdminProvider>
                            <UserContextProvider>
                              <div className="wrapper">{children}</div>
                            </UserContextProvider>
                          </MainAdminProvider>
                        </LeadContextProvider>
                      </RoleContextProvider>
                    </EmployeeContextProvider>
                  </PaymentContextProvider>
                </CourseContextProvider>
              </EmiContextProvider>
            </PaymentContextProvider>
          </StudentContextProvider>
        </StudentLoginContextProvider>
      </body>
    </html>
  );
}
