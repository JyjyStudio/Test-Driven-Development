/**
 * @jest-environment jsdom
 */

 import '@testing-library/jest-dom'
 import { getByRole, getByTestId, getByLabelText } from '@testing-library/dom'
 import userEvent from '@testing-library/user-event'
 import { handleSignInForm } from '../../utils/SignInForm/index'
 import SignInPage from '../../pages/signIn/index'


 beforeEach(() => {
    document.body.innerHTML = SignInPage.render()
    handleSignInForm()
})

afterEach(() => {
    document.body.innerHTML = ''
})


describe('SignInForm Integration Test Suites', () => {
    it('should not display by default the email error message', () => {
        expect(getByTestId(document.body, 'user-email-error-msg'))
            .toHaveClass('hidden')
    })

    it('should display the email error message when the value is not correct', async () => {
        await userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'jyh@d.fr'
        )
        
        await userEvent.click(getByRole(document.body, 'button'))

        expect(getByTestId(document.body, 'user-email-error-msg'))
            .not.toHaveClass('hidden')
    })
    
    it('should display not the email error message when the value is correct', async () => {
        await userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'jyhad@test.fr'
        )
        
        await userEvent.click(getByRole(document.body, 'button'))

        expect(getByTestId(document.body, 'user-email-error-msg'))
            .toHaveClass('hidden')
    })

    it('should display the error message when the e-mail is not correct', async () => {
        await userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'), 'jyhad@test.com'
        )
        const btn = getByRole(document.body, 'button')
        await userEvent.click(btn)

        expect(
            getByTestId(document.body, 'user-email-error-msg')
        ).not.toHaveClass('hidden')
    })
    
    it('should not display the error message when the e-mail is correct but it should display the password error message', async () => {
        await userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'jyhad@test.fr'
        )

        await userEvent.click(getByRole(document.body, 'button'))

        expect(
            getByTestId(document.body, 'user-email-error-msg')
        ).toHaveClass('hidden')
        
        expect(
            getByTestId(document.body, 'user-password-error-msg')
        ).not.toHaveClass('hidden')
    })
    
    it('should display the error message when the password is not correct', async () => {
        await userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'jyhad@test.fr'
        )
        
        await userEvent.type(
            getByLabelText(document.body, 'Votre mot de passe'),
            'jyjy'
        )

        await userEvent.click(getByRole(document.body, 'button'))
        
        expect(
            getByTestId(document.body, 'user-password-error-msg')
        ).not.toHaveClass('hidden')
    })
    
    it('should not display any error messages since both email and password are correct', async () => {
        await userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'jyhad@test.fr'
        )
        
        await userEvent.type(
            getByLabelText(document.body, 'Votre mot de passe'),
            '123456'
        )

        await userEvent.click(getByRole(document.body, 'button'))
        
        expect(
            getByTestId(document.body, 'user-email-error-msg')
        ).toHaveClass('hidden')
        
        expect(
            getByTestId(document.body, 'user-password-error-msg')
        ).toHaveClass('hidden')
    })
})
