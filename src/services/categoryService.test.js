const { getAllCategories } = require('./categoryService')

jest.mock('./categoryService')

describe('testing category service function', () => {
    const mockedGetAllCategories = jest.fn();

    it('testing get all categories function', () => {
        const result = {
            category_id: 2000,
            category_name: "cement category",
        }
        mockedGetAllCategories.mockReturnValue(result)

        expect(mockedGetAllCategories()).toBe(result)
    })
})