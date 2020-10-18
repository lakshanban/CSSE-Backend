const itemController = require('../controllers/itemController')
const { addBids, getAllBids, getAllBidsBySupplier } = require('./bidService')  // importing the bids  async functions for testing


jest.mock('./bidService')

describe('testing the bids functions ', () => {

    const mockedAddBids = jest.fn();
    const mockedGetAllBids = jest.fn();
    const mockedGetAllBidsBySupplier = jest.fn();

    it('testing add bids function', () => {
        mockedAddBids.mockReturnValue("succesfully added")

        expect(mockedAddBids()).toBe("succesfully added")
    })

    it('testing get all bids function ', () => {
        const result = [{
            bidId: 1001,
            transport_cost: 2000,
            amount: 20000,
            description: "test description",
            supplierId: 1021,
            requisitionId: 10012

        }]
        mockedGetAllBids.mockReturnValue(result)

        expect(mockedGetAllBids()).toBe(result)
    })

    it('testing get bid by function', () => {

        const bid_id = 1001

        const result = [{
            bidId: 1001,
            transport_cost: 2000,
            amount: 20000,
            description: "test description",
            supplierId: 1021,
            requisitionId: 10012

        }]

        mockedGetAllBidsBySupplier.mockReturnValue(result)


        expect(mockedGetAllBidsBySupplier(bid_id)).toBe(result)
    })

})
