import { SubmitFeedbackUseCase } from "./submit-feedback-use-cases"



//spies = espiões
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    {
        create: createFeedbackSpy
    },
    { sendMail: sendMailSpy }


)


describe('Submit feedback', () => {
    it('should be able to submit a feed back', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exampe comment',
            screenshot: 'data:image/png;base64, sadasdasdasdasdsa'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it('should not be able to submit feedback without type', async () => {

        await expect(submitFeedback.execute({
            type: '',
            comment: 'exampe comment',
            screenshot: 'data:image/png;base64, sadasdasdasdasdsa'
        })).rejects.toThrow();
    });
    it('should not be able to submit feedback without comment', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64, sadasdasdasdasdsa'
        })).rejects.toThrow();
    });
    it('should not be able to submit feedback with an invalid screenshot', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'test.jpg'
        })).rejects.toThrow();
    })
})