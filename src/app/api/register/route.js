import { User } from "@/app/api/models/User.js";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
	var { email, password } = await req.json();

	try {
		mongoose.connect(process.env.MONGO_URL);
	} catch (error) {
		throw new error("Error Connecting to Mongoose");

	}

	const existingUser = await User.findOne({ email });

	if (existingUser) {
		return new NextResponse("Esse Email já está em uso", {
			status: 400,
		});
	}

	const bcrypt = require("bcryptjs");
	const noHashedPass = password;
	const salt = bcrypt.genSaltSync(10);
	password = bcrypt.hashSync(noHashedPass, salt);

	const newUser = new User({
		email,
		password,
	});

	console.log("senha mudada");
	try {
		await newUser.save();
		return new NextResponse("Cadastrado", {
			status: 200,
		});
	} catch (error) {
		return new NextResponse(error, {
			status: 500,
		});
	}
}
