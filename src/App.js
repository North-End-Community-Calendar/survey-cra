import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabNav from './TabNav';
import ResidentSurvey from './ResidentSurvey';
import PromoterSurvey from './PromoterSurvey';
import OrganizerSurvey from './OrganizerSurvey';

export default function App() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Thank you for taking our survey on organizing and attending events in Detroit! 
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5" component="h2" gutterBottom align="center">
            We are working to foster incredible neighborhoods by helping Detroit's residents connect with community events.
          </Typography>
          <br/>
          <br/>
          <Typography variant="subtitle1" component="h3" gutterBottom align="center">
            What best describes you?
          </Typography>
          <TabNav />
      </Box>

      <Box align="center">
        <Switch>
          <Route path="/resident" component={ResidentSurvey} />
          <Route path="/promoter" component={PromoterSurvey} />
          <Route path="/organizer" component={OrganizerSurvey} />
        </Switch>
      </Box>
    </Container>
  );
}
