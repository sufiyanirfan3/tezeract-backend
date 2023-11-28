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
    const { noEmpEndPeriod,noEmpLeft, position } = req.query;

    const noEmpStart = await Employee.count({
      where: {
        position: position,
      },
    });

    const retentionRate = ((noEmpEndPeriod - noEmpLeft) / noEmpStart) * 100;

    const result={
        retentionRate:retentionRate+"%",
        position:position
    }
    return res.json({
      success: true,
      message: "Executed Successfully",
      data: result,
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
