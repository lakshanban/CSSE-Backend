const { QueryDatabase } = require('./databaseService')

jest.mock('./databaseService')

describe('testing the database service ', () => {
    const mockedQueryDatabase = jest.fn();

    it('testing the Query database function ', () => {
        const result = [{
            category_id: 2000,
            category_name: "cement category",
        }]
        const query = "SELECT * FROM category";
        mockedQueryDatabase.mockReturnValue(result)

        expect(mockedQueryDatabase(query)).toBe(result)
    })
}) 