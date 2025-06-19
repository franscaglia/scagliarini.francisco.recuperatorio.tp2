import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
	{
		cardNumber: { type: String, required: true, maxlength: 100, unique: true, index: true },
		cardHolder: { type: String, required: true, maxlength: 100},
        expirationDate: { type: String, required: true, maxlength: 100 },
        cvv: { type: String, required: true, maxlength: 100 },
        email: { type: String, required: true, maxlength: 100, unique: true}, 
	},
	{ collection: "card", versionKey: false },
);

export const CardModel = mongoose.model("Card", cardSchema);