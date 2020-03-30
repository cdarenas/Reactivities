import React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { Form } from 'semantic-ui-react';

const LoginForm = () => {
    return (
        <FinalForm onSubmit={(values) => console.log(values)}
            render={({ handleSubmit }) => (
                <Form>
                    
                </Form>
            )}>
        </FinalForm>
    )
}

export default LoginForm;