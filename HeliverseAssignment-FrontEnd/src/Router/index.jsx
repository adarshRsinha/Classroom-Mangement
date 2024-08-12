import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainHome from '../Component/MainHome';
import ChooseRole from "../Component/ChooseRole";
import PrincipleLogin from "../Component/Principle/Login";
import PrincipleDashboard from "../Component/Principle/Dashboard";
import StudentRegister from "../Component/Principle/RegisterStudent";
import TeacherRegister from "../Component/Principle/RegisterTeacher";

import StudentHome from "../Component/Student/Home";
import StudentLogin from "../Component/Student/Login";

import TeacherHome from "../Component/Teacher/Home";
import TeacherLogin from "../Component/Teacher/Login"

import Mainentry from "../Component/Mainentry";
import StudentAreaInsidePrinciple from "../Pages/StudentAreaInsidePrinciple";
import TeacherAreaInsidePrinciple from "../Pages/TeacherAreaInsidePrinciple";
import ClassRoomAreaInsidePrinciple from "../Pages/ClassRoomAreaInsidePrinciple";
import AssignClasssRoomToStudent from "../Pages/AssignClasssRoomToStudent";
import AssignLectureToTeacher from "../Pages/AssignLectureToTeacher";

const index = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/option",
    element: <ChooseRole/>
  },
  {
    path: "/PrincipleLogin",
    element: <PrincipleLogin />,
  },
  {
    path: "/PrincipleDashBoard",
    element: <PrincipleDashboard />,
  },
  {
    path: "/StudentArea",
    element: <StudentAreaInsidePrinciple />,
  },
  {
    path: "/TeacherArea",
    element: <TeacherAreaInsidePrinciple />,
  },
  {
    path: "/ClassRoomArea",
    element: <ClassRoomAreaInsidePrinciple />,
  },
  {
    path: "/AssignClasssRoomToStudent",
    element: <AssignClasssRoomToStudent />,
  },
  {
    path: "/AssignLectureToTeacher",
    element: <AssignLectureToTeacher />,
  },
  {
    path: "/StudentHome",
    element: <StudentHome />,
  },
  {
    path: "/StudentLogin",
    element: <StudentLogin/>
  },
  {
    path: "/TeacherDashBoard",
    element: <TeacherHome />,
  },
  {
    path: "/TeachrLogin",
    element: <TeacherLogin/>
  },
  {
    path: "",
    element: <Mainentry />,
  },
]);

export default index;
