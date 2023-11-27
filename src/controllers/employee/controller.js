const sequelize = require("sequelize");
const { Op } = require("sequelize");
const Employee = require("../../models").employees;

exports.getEmployeeAvgSalary = async function (req, res) {
  try {
    const avgSalary = await Employee.findAll({
      attributes: [
        "position",
        [sequelize.fn("AVG", sequelize.col("salary")), "average_salary"],
      ],
      group: ["position"],
    });

    return res.json({
      success: true,
      message: "Executed Successfully",
      data: avgSalary,
    });
  } catch (e) {
    return res.json({
      success: false,
      error: e.message,
    });
  }
};

exports.filterEmployeesByExperience = async function (req, res) {
  try {
    const { minExperience, maxExperience } = req.query;

    const employees = await Employee.findAll({
      where: {
        joiningDate: {
          [Op.between]: [
            new Date(new Date() - maxExperience * 365 * 24 * 60 * 60 * 1000),
            new Date(new Date() - minExperience * 365 * 24 * 60 * 60 * 1000),
          ],
        },
      },
      attributes: ["id", "name", "position", "salary", "joiningDate"],
    });

    return res.json({
      success: true,
      message: "Executed Successfully",
      data: employees,
    });
  } catch (e) {
    return res.json({
      success: false,
      error: e.message,
    });
  }
};

exports.getTopEarners = async function (req, res) {
  try {
    const { topN } = req.query;

    const topEarners = await Employee.findAll({
      order: [["salary", "DESC"]],
      limit: parseInt(topN),
      attributes: ["id", "name", "position", "salary", "joiningDate"],
    });

    return res.json({
      success: true,
      message: "Executed Successfully",
      data: topEarners,
    });
  } catch (e) {
    return res.json({
      success: false,
      error: e.message,
    });
  }
};

exports.calculateRetentionRateByPosition = async function (req, res) {
  try {
    const { startDate, endDate } = req.query;

    // Find distinct positions
    const distinctPositions = await Employee.findAll({
      attributes: [
        [sequelize.fn("DISTINCT", sequelize.col("position")), "position"],
      ],
    });

    const retentionRatesByPosition = [];

    for (const position of distinctPositions) {
      const positionName = position.dataValues.position;

      // Calculate the number of employees at the start of the period for the current position
      const startEmployeesCount = await Employee.count({
        where: {
          joiningDate: {
            [Op.lte]: startDate,
          },
          position: positionName,
        },
      });

      // Calculate the number of employees at the end of the period for the current position
      const endEmployeesCount = await Employee.count({
        where: {
          joiningDate: {
            [Op.lte]: endDate,
          },
          position: positionName,
        },
      });

      // Calculate the number of employees who left during the period for the current position
      const leftEmployeesCount = await Employee.count({
        where: {
          joiningDate: {
            [Op.between]: [startDate, endDate],
          },
          position: positionName,
        },
      });

      // Calculate the retention rate for the current position
      const retentionRate =
        ((endEmployeesCount - leftEmployeesCount) / startEmployeesCount) * 100;

      retentionRatesByPosition.push({
        position: positionName,
        retentionRate,
      });
    }

    return res.json({
      success: true,
      message: "Executed Successfully",
      data: retentionRatesByPosition,
    });
  } catch (e) {
    return res.json({
      success: false,
      error: e.message,
    });
  }
};

exports.filterEmployeesBySalaryRange = async function (req, res) {
  try {
    const { minSalary, maxSalary } = req.query;

    const employees = await Employee.findAll({
      where: {
        salary: {
          [Op.between]: [minSalary, maxSalary],
        },
      },
      attributes: ["id", "name", "position", "salary", "joiningDate"]
    });

    return res.json({
      success: true,
      message: "Executed Successfully",
      data: employees,
    });
  } catch (e) {
    return res.json({
      success: false,
      error: e.message,
    });
  }
};
