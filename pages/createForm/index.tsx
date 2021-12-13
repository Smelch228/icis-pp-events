// @ts-nocheck
// @ts-ignore

import Form from './Containers/Form'
import HeaderComponent from "../../common/components/HeaderComponent";
import Grid from "@mui/material/Grid";
import ArrowBack from "@mui/icons-material/ArrowBack";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@mui/material/IconButton";
import {useRouter} from "next/router";

const CustomIconButton = withStyles({
    root: {
        height: '42px',
        width: '42px',
        backgroundColor: '#E8E9EB',
        '&:hover': {
            backgroundColor: '#e5e5e5'
        }
    },
})(IconButton);

function FormPage () {
    const router = useRouter()
    return (
        <>
          <HeaderComponent>
            <Grid container>
              <CustomIconButton onClick={() => router.back()}><ArrowBack/></CustomIconButton>
            </Grid>
          </HeaderComponent>
          <Form />
        </>
        )

}

export default FormPage