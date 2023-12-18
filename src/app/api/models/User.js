import { Schema, models, model } from "mongoose";
import mongoose from 'mongoose';

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: false,
			unique: true,
		},
		password: {
			type: String,
			required: false,
		},
		githubId: {
			type: String,
			unique: true,
		},
	},
	{ timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
