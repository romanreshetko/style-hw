import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import './styles.scss'


interface Article {
    title: string;
    text: string
}
interface ListArticle {
    items: Article[];
}

export const List: React.FC<ListArticle> = ({items}) => {

    return <div>
        <Container maxWidth="sm">
        <Stack spacing={2}>
            {items.map((item, index) => {
                const isOdd = (index + 1) % 2 !== 0;
                return (
                    <Accordion className='accordion'>
                        <AccordionSummary
                        style={{
                            backgroundColor: isOdd ? "black" : "blue",
                            color: "white",
                          }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header">{item.title}</AccordionSummary>
                        <AccordionDetails className='accordionDetails'>{item.text}</AccordionDetails>
                    </Accordion>
            )})}
        </Stack>
        </Container>
    </div>
}