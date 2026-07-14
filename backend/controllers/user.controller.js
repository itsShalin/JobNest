const User = require("../models/User");

const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found.",
            });
        }

        res.status(200).json({
            user,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const updateProfile = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            req.body,
            {
                new: true,
            }
        ).select("-password");

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found.",
            });
        }

        res.status(200).json({
            message: "User updated successfully!",
            user: updatedUser,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getProfile,
    updateProfile,
};