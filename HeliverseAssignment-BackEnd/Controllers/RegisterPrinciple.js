const Principle = require("../Models/PrincipleSchema");
const bcryptjs = require("bcryptjs");

const RegisterPrinciple = async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;

    // Debug: Check if Name, Email, and Password are being passed correctly
    if (!Name || !Email || !Password) {
      return res.status(400).json({
        message: "Name, Email, and Password are required",
        error: true,
      });
    }

    const existingPrincipal = await Principle.findOne({ Email });

    if (existingPrincipal) {
      return res.status(400).json({
        message: "Principal with this email already exists",
        error: true,
      });
    }

    const Slat = await bcryptjs.genSalt(10);
    // Debug: Check if Slat was generated correctly
    if (!Slat) {
      return res.status(500).json({
        message: "Error generating salt",
        error: true,
      });
    }

    const HashPassword = await bcryptjs.hash(Password, Slat);
    // Debug: Check if HashPassword was created correctly
    if (!HashPassword) {
      return res.status(500).json({
        message: "Error hashing password",
        error: true,
      });
    }

    const Payload = {
      Name: Name,
      Email: Email,
      Password: HashPassword,
    };

    const PrincipleSave = new Principle(Payload);
    const Save = await PrincipleSave.save();

    return res.status(201).json({
      message: "Principal Created Successfully",
      data: Save,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};

module.exports = RegisterPrinciple;
