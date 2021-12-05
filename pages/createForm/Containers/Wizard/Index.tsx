// @ts-nocheck
// @ts-ignore

import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { Form } from 'react-final-form'

export default class Wizard extends React.Component {

    static Page = ({ children }) => children

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            values: props?.initialValues || {}
        }
    }
    next = values => {
        if (values.role === 'participate' && this.state.page === 3) {
            this.setState(state => ({
                page: Math.min(state.page + 2, this.props?.children.length - 2),
                values
            }))
        }
        this.setState(state => ({
            page: Math.min(state.page + 1, this.props?.children.length - 1),
            values
        }))
    }

    previous = (values) => {
        if (values.role === 'participate' && this.state?.page === 5) {
            this.setState(state => ({
                page: Math.max(state?.page - 2, 0)
            }))}
        this.setState(state => ({
            page: Math.max(state?.page - 1, 0)
        }))}

    /**
     * NOTE: Both validate and handleSubmit switching are implemented
     * here because 🏁 Redux Final Form does not accept changes to those
     * functions once the form has been defined.
     */

    validate = values => {
        const activePage = React.Children.toArray(this.props?.children)[
            this.state.page
            ]
        return activePage?.props?.validate ? activePage?.props?.validate(values) : {}
    }

    handleSubmit = values => {
        const { children, onSubmit} = this.props
        const { page } = this.state
        const isLastPage = page === React.Children.count(children) - 1
        if (isLastPage) {
            return onSubmit(values)
        } else {
            this.next(values)
        }
    }

    render() {
        const { children } = this.props
        const { page, values } = this.state
        const activePage = React.Children.toArray(children)[page]
        const isLastPage = page === React.Children.count(children) - 1
        return (
            <Form
                initialValues={values}
                validate={this.validate}
                onSubmit={this.handleSubmit}
            >
                {({ handleSubmit, submitting, values }) => (
                    <form onSubmit={handleSubmit}>
                        {activePage}
                        <Box mt={2}>
                        <Grid container spacing={1}>
                            {page > 0 && (
                                <Grid item xs={6}>
                                    <Button 
                                        variant="contained" 
                                        type="Button" 
                                        onClick={() => this.previous(values)}
                                    >
                                        Назад
                                    </Button>
                                </Grid>
                            )}
                            {!isLastPage && <Grid item xs={6}><Button variant="contained" color="secondary" type="submit">Далее</Button></Grid>}
                            {isLastPage && (
                                <Grid item xs={6}>
                                  <Button type="submit" color="secondary" variant="contained" disabled={submitting}>
                                    Готово
                                   </Button>
                                </Grid>
                            )}
                        </Grid>
                        </Box>
                        {/*<pre>{JSON.stringify(values, 0, 2)}</pre>*/}
                    </form>
                )}
            </Form>
        )
    }
}