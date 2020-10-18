const { addInvoice, getAllinvoices, getInvoiceById } = require('./invoiceService')

jest.mock('./invoiceService')

describe('testing invoice service', () => {

    const mockedAddInvoice = jest.fn();
    const mockedGetAllInvoices = jest.fn();
    const mockedGetInvoiceById = jest.fn();

    it('testing add invoice mocked function', () => {
        const result = "invoice added successfully"
        const title = "test invoice";
        const description = "test inovice description"
        const document = "uploads2020-10-17T17-38-52.845Zinternational.jpg"

        mockedAddInvoice.mockReturnValue(result);

        expect(mockedAddInvoice()).toBe(result)
    })

    it('testing get All invoices function ', () => {
        const result = [{
            invoice_id: 1000,
            title: "test invoice",
            description: "test invoice description",
            document: "uploads2020-10-17T17-38-52.845Zinternational.jpg"
        }]

        mockedGetAllInvoices.mockReturnValue(result)

        expect(mockedGetAllInvoices()).toBe(result)
    })
})