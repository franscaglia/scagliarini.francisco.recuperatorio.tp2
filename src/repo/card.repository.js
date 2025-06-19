import { CardModel } from '../model/card.model.js'

export class CardRepository {
    async getAll () {
        return await CardModel.find()
    }
    async searchById (cardNumber) {
        return await CardModel.findOne({ cardNumber })
    }
    async createOne (cardData) {
        const card = new CardModel(cardData)
        return await card.save()
    }
    async modifyOne (cardNumber, newCvv) {
        return await CardModel.findOneAndUpdate({ cardNumber }, { cvv: newCvv }, { new: true }).exec()
    }
    async deleteById (cardNumber) {
        return await CardModel.findOneAndDelete({ cardNumber }).exec()
    }
}