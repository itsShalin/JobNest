const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },


    email: {
        type: String,
        required: true,
        unique: true,
    },


    password: {
        type: String,
        required: true,
    },


    role: {
        type: String,
        enum: ["user", "company"],
        default: "user",
    },


    location: {
        type: String,
        default: "",
    },


    workStatus: {
        type: String,
        default: "Not Looking",
    },


    bio: {
        type: String,
        default: "",
    },


    goals: {
        type: String,
        default: "",
    },


    skills: {
        type: [String],
        default: [],
    },


    achievements: {
        type: [String],
        default: [],
    },


    projects: [
        {
            title: {
                type: String,
                default: "",
            },

            description: {
                type: String,
                default: "",
            },

            github: {
                type: String,
                default: "",
            }
        }
    ],


    education: {
        degree: {
            type: String,
            default: "",
        },

        university: {
            type: String,
            default: "",
        },

        year: {
            type: String,
            default: "",
        }
    },


    github: {
        type: String,
        default: "",
    },


    linkedin: {
        type: String,
        default: "",
    },


    portfolio: {
        type: String,
        default: "",
    },


}, {
    timestamps: true,
});


module.exports = mongoose.model("User", userSchema);