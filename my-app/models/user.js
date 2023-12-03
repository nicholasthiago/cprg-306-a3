
import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({

	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},

	password: {
		type: String,
		required: true,
	},

	isAdmin: {
		type: Boolean,
		required: true,
	}
},
	{ timestamps: true }
);

export const User = models.User || mongoose.model("User", userSchema);

const movieSchema = new Schema({

	title: {
		type: String,
		required: true,
	},

	year: {
		type: Number,
		required: true,
	},

	imdb: {
		type: Number,
		required: true,
	},

	description: {
		type: String,
		required: true,
	}
},
	{ timestamps: true }
);

export const Movie = models.Movie || mongoose.model("Movie", movieSchema);

















