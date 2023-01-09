import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import ControlPointIcon from '@mui/icons-material/ControlPoint';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    id: '1',
    title: 'Content Clothes',
    content:
      'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    imgPath:
      'https://img.freepik.com/premium-photo/light-colored-womens-summer-clothes-hanger_176873-10340.jpg?w=1060',
  },
  {
    id: '2',
    title: 'Content Clothes',
    content:
      'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    imgPath:
      'https://img.freepik.com/free-vector/banner-with-handrawn-elements-sale_125540-187.jpg?w=1060&t=st=1664807206~exp=1664807806~hmac=9b329b4d8a44ce25283905099840c52ad6830bf228960b228bdf1741b9f796e3',
  },
  {
    id: '3',
    title: 'Content Clothes',
    content:
      'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    imgPath:
      'https://img.freepik.com/premium-photo/women-s-summer-accessories_86156-1048.jpg?w=996',
  },
];

function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: any) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{ width: '100%', flexGrow: 1, marginTop: '64px' }}
      className="mb-banner"
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          pl: 2,
          bgcolor: 'background.default',
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.id} className="image-parents">
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                className="mb-banner-img"
                component="img"
                sx={{
                  height: 650,
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.id}
              />
            ) : null}
            <div className="content">
              <b>{step.title}</b>
              <i>{step.content}</i>
              <Button
                className="button-banner mb-button-banner"
                variant="contained"
                startIcon={<ControlPointIcon />}
              >
                Thêm vào túi
              </Button>
            </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Trước
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Sau
          </Button>
        }
      />
    </Box>
  );
}

export default Banner;
