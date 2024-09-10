import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useNavStore = defineStore("menu", {
  state: () => {
    return {
      items: [
        {
          title: "Dashboard",
          image: "monitor-mobbile.svg",
          name: "Dashboard",
          // permittedRoles: ["*"],
        },
        {
          title: "Center Management",
          image: "share.svg",
          // permittedRoles: ["*"],
          links: [
            {
              text: "Training Centers",
              name: "Centers",
              // permittedRoles: ["*"],
            },
            {
              text: "Facilitators",
              name: "Facilitators",
              // permittedRoles: ["super_admin", "admin"],
            },
            {
              text: "ATC Admins",
              name: "AtcAdmins",
              // permittedRoles: ["super_admin", "admin"],
            },
          ],
        },
        {
          title: "Cohort Management",
          image: "gps.svg",
          name: "Cohorts",
          // permittedRoles: ["*"],
        },
        {
          title: "Student Management",
          image: "people.svg",
          name: "Students",
          // permittedRoles: ["super_admin", "admin"],
        },
        {
          title: "Course Management",
          image: "teacher.svg",
          name: "Courses",
          // permittedRoles: ["*"],
          links: [
            {
              text: "Courses",
              name: "Courses",
              // permittedRoles: ["*"],
            },
            {
              text: "Upload Results",
              name: "UploadCoursesResult",
              // permittedRoles: ["*"],
            },

          ],

        },

        {
          title: "Reports",
          image: "directbox-notif.svg",
          // permittedRoles: ["*"],
          links: [
            {
              text: "Course Attendance Report",
              name: "ViewCourseAttendanceReport",
              // permittedRoles: ["*"],
            },
            {
              text: "Course Performance Report",
              name: "viewCoursePerformanceReport",
              // permittedRoles: ["*"],
            },

            {
              text: "Center Report",
              name: "MonthlyCenterReports",
              // permittedRoles: ["*"],
            },
            {
              text: "Zonal Report",
              name: "viewzonalMonthlyReport",
              // permittedRoles: ["*"],
            },
          ],
        },

        // {
        //   title: "People Management",
        //   image: "profile-2user.svg",
        //   links: [
        //     { text: "Pay Facilitators", path: "#" },
        //     { text: "View/Manage Payroll", path: "#" },
        //   ],
          // permittedRoles: ["*"],
        // },
        // {
        //   title: "Finance",
        //   image: "empty-wallet.svg",
        //   links: [
        //     { text: "Income Per Center", path: "#" },
        //     { text: "Income from all Centers", path: "#" },
        //   ],
          // permittedRoles: ["*"],
        // },
        {
          title: "Communication",
          image: "messages-3.svg",
          // permittedRoles: ["*"],
          links: [
            // { text: "Email", name: "Communication", permittedRoles: ["*"] },
            { text: "SMS", path: "#" },
          ],
        },
        {
          title: "User Management",
          image: "user.svg",
          name: "Users",
          // permittedRoles: ["super_admin", "admin"],
        },

        // {
        //   title: "Settings",
        //   image: "setting-2.svg",
        //   links: [
        //     { text: "Switch to Dark Mode", path: "#" },
        //     { text: "Center Report", path: "#" },
        //   ],
          // permittedRoles: ["*"],
        // },
      ],
    };
  },
});
