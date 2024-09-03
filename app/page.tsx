 
import { Container, CssBaseline, Typography } from '@mui/material';
import "./page.module.css"
import LanguageSelector from '../components/LanguageSelector';
const Home = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Typography variant="h4" align="center">Welcome to ORF Test Page</Typography>
     <LanguageSelector/>
    </Container>
  );
};

export default Home;
