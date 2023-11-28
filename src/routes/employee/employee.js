const express = require("express");
const route = express.Router();
const employeeController = require("../../controllers/employee/controller");

route.get("/avgSalary", employeeController.getEmployeeAvgSalary);
route.get(
  "/filterByExperience",
  employeeController.filterEmployeesByExperience
);
route.get("/topEarners", employeeController.getTopEarners);
route.get(
  "/retentionRateByPosition",
  employeeController.calculateRetentionRateByPosition
);
route.get(
  "/filterBySalaryRange",
  employeeController.filterEmployeesBySalaryRange
);

module.exports = route;
