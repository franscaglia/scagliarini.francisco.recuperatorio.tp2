import { CardRepository } from '../repo/card.repository.js'

const cardRepo = new CardRepository()

export const CardController = {
    getAll: async (req, res) => {
        try{
            const cardRes = await cardRepo.getAll()
            if(!cardRes) { return res.status(404).json({
                message: " -- no se encontraron tarjetas"
            })}
            res.status(200).json({
                message: " -- tarjetas encontradas exitosamente : ",
                payload: cardRes
            })
        }catch(error){
            res.status(500).json({
                message: " -- error intentando encontrar tarjetas"
            })
        }        
    },
    searchById: async (req, res) => {
        try{
            const cardNumber = req.params.cardNumber
            const card = await cardRepo.searchById(cardNumber)
            if(!card) { return res.status(404).json({
                message: " -- no se encontro esa tarjeta"
            })}
            res.status(200).json({
                message: " -- tarjeta encontrada exitosamente : ",
                payload: card
            })
        }catch(error){
            res.status(500).json({
                message: " -- error intentando buscar por numero de tarjeta"
            })
        }
    },
    createOne: async (req, res) => {
        try{
            const tarjeta = req.body
            const tarjetaNueva = await cardRepo.createOne(tarjeta)
            if(!tarjetaNueva) { return res.status(404).json({
                message: " -- no se creo la tarjeta : intente otro mail y/o numero . . . "
            })}
            res.status(200).json({
                message: " -- tarjeta creada exitosamente : ",
                payload: tarjetaNueva
            })
        }catch(error){
            res.status(500).json({
                message: " -- no se creo la tarjeta : intente otro mail y/o numero . . . "
            })
        }
    },
    modifyOne: async (req, res) => {
        try{
            const cardNumber = req.params.cardNumber
            const newCvv = req.body.cvv
            const cardRes = await cardRepo.modifyOne(cardNumber, newCvv)
            if(!cardRes) { return res.status(404).json({
                message: " -- no se pudo modificar la tarjeta "
            })}
            res.status(200).json({
                message: " -- tarjeta modificada exitosamente : ",
                payload: cardRes
            })
        }catch(error){
            res.status(500).json({
                message: " -- error intentando modificar la tarjeta"
            })
        }
    },
    deleteById: async (req, res) => {
        try{
            const cardNumber = req.params.cardNumber
            const cardRes = await cardRepo.deleteById(cardNumber)
            if(!cardRes) { return res.status(404).json({
                message: " -- no se pudo eliminar la tarjeta "
            })}
            res.status(200).json({
                message: " -- tarjeta eliminada exitosamente : ",
                payload: cardRes
            })
        }catch(error){
            res.status(500).json({
                message: " -- error intentando eliminar la tarjeta"
            })
        }
    }
}