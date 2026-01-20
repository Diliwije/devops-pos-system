const OrderSchema = require('../model/OrderSchema');

const createOrder = async (req, resp) => {
    try {
        const {date, totalCost, products, customer} = req.body;
        const createdOrder = new OrderSchema({
            date, totalCost, products, customer
        });
        await createdOrder.save();
        resp.status(201).json({message: 'Order Saved...'});

    } catch (e) {
        resp.status(500).json({'message': 'Error', error: e});
    }
};
const findAllOrders = async (req, resp) => {
    try {
        const dataList = await OrderSchema.find();
        resp.status(201).json({message: 'Orders..', dataList:dataList});

    } catch (e) {
        resp.status(500).json({'message': 'Error', error: e});
    }
};

module.exports = {createOrder, findAllOrders};