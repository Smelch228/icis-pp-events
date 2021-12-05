// @ts-nocheck
// @ts-ignore

import React from 'react';
import Grid from '@mui/material/Grid';
import { Radios, DatePicker, TimePicker, Checkboxes, TextField } from 'mui-rff';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DateFnsUtils from '@date-io/date-fns';
import Wizard from '.';
import tags from '../../../../common/mocks/tags.json'
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router'



//TODO: add data from global props
const Form = () => {
    const onSubmit = async values => {
        // window.alert(JSON.stringify(values, 0, 2)) //TODO: normalize values and POST
        router.push('/activities')
        console.log(values)
    }
    const router = useRouter()
    return (
        <Paper square>
            <Box p={2}>
                <Wizard
                    onSubmit={onSubmit}
                    initialValues={{ldap: 60078636, name: 'Марк Куличев'}}>
                    <Wizard.Page>
                        <Grid>
                            <Box mt={2} mb={2}><Typography variant="h3" component="h2">Что ты хочешь
                                сделать?</Typography></Box>
                            <Radios
                                name="role"
                                formControlProps={{margin: 'none'}}
                                data={[
                                    {label: 'Организовать мероприятие', value: 'organize'},
                                    {label: 'Предложить идею', value: 'participate'},
                                ]}
                            />
                        </Grid>
                    </Wizard.Page>
                    <Wizard.Page>
                        <Grid>
                            <Box mt={2} mb={2}><Typography variant="h3" component="h2">Выбери формат</Typography></Box>
                            <Radios
                                name="type"
                                formControlProps={{margin: 'none'}}
                                data={[
                                    {label: 'Оффлайн', value: 'offline'},
                                    {label: 'Онлайн', value: 'online'},
                                ]}
                            />
                        </Grid>
                    </Wizard.Page>
                    <Wizard.Page>
                        <Box mt={2} mb={2}><Typography variant="h3" component="h2">Название</Typography></Box>
                        <TextField name="title"/>
                    </Wizard.Page>
                    <Wizard.Page>
                        <Box mt={2} mb={2}><Typography variant="h3" component="h2">Описание</Typography></Box>
                        <TextField name="description"/>
                    </Wizard.Page>
                    <Wizard.Page>
                        <Box mt={2} mb={2}><Typography variant="h3" component="h2">Выбери дату и
                            время</Typography></Box>
                        <DatePicker
                            name="date"
                            label="Дата"
                            margin="normal"
                            dateFunsUtils={DateFnsUtils}
                        />
                        <TimePicker
                            name="time"
                            label="Время"
                            margin="normal"
                            dateFunsUtils={DateFnsUtils}
                        />
                    </Wizard.Page>
                    <Wizard.Page>
                        <Box mt={2} mb={2}><Typography variant="h3" component="h2">Место проведения</Typography></Box>
                        <TextField name="place"/>
                    </Wizard.Page>
                    <Wizard.Page>
                        <Box mt={2} mb={2}><Typography variant="h3" component="h2">Выбери теги</Typography></Box>
                        <Checkboxes
                            name="tags"
                            formControlProps={{margin: 'none'}}
                            formGroupProps={{row: true}}
                            data={tags.map(tag => ({label: tag, value: tag}))}
                        />
                    </Wizard.Page>
                </Wizard>
            </Box>
        </Paper>
    )
}
export default Form