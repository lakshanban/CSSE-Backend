const { addItemToCart, getItemsByRequisition } = require('./cartService')

jest.mock('./cartService')

describe('testing cart service functions', () => {
    const mockedAddItemToCart = jest.fn()
    const mockedGetItemsByRequisition = jest.fn()

    it('testing the add items to cart function', () => {
        const item_name = "screw driver"
        const description = "screw driver description"
        const price = 2000
        const suplier = 201010
        const categoryId = 10

        mockedAddItemToCart.mockReturnValue("succesfully added the item")

        expect(mockedAddItemToCart(item_name, description, price, suplier, categoryId)).toBe("succesfully added the item")
    })

    it('testing get item from cart by requisition id', () => {
        const requisition_id = 1000

        const result = {
            item_id: 2020,
            item_name: "screw driver",
            description: "test screw driver descriptpion",
            price: 300,
            suplier: 2110,
            categoryId: 10
        }

        mockedGetItemsByRequisition.mockReturnValue(result)

        expect(mockedGetItemsByRequisition()).toBe(result)
    })
})