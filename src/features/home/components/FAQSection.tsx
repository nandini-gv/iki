import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqCategories, faqData, type FaqCategory } from '../data/homeContent';

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory>('Job Seekers');
  const [expanded, setExpanded] = useState<string | false>('faq-0');

  const handleAccordionChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const currentQuestions = faqData[selectedCategory] ?? [];

  return (
    <Box
      id="faq"
      component="section"
      aria-label="Frequently Asked Questions"
      sx={{
        backgroundColor: '#000000',
        py: { xs: 8, md: 12 },
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 5, md: 8 }}>
          {/* Left Column: Heading and Category Filter */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: { md: 'sticky' }, top: { md: 100 } }}>
              <Typography
                variant="overline"
                sx={{
                  color: '#47a3ff',
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  mb: 1,
                  display: 'block',
                }}
              >
                FAQS
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: '#ffffff',
                  fontSize: { xs: '1.85rem', sm: '2.25rem', md: '2.5rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Answers to questions about
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  mb: 3.5,
                }}
              >
                Select a category to view answers tailored to your needs.
              </Typography>

              {/* Category Filter Chips / Buttons */}
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {faqCategories.map((category) => {
                  const isSelected = selectedCategory === category;
                  return (
                    <Chip
                      key={category}
                      label={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setExpanded('faq-0');
                      }}
                      sx={{
                        backgroundColor: isSelected ? '#0071e3' : 'rgba(255, 255, 255, 0.08)',
                        color: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
                        fontWeight: 600,
                        fontSize: '0.8125rem',
                        py: 2,
                        px: 1,
                        borderRadius: 9999,
                        border: '1px solid',
                        borderColor: isSelected ? '#0071e3' : 'rgba(255, 255, 255, 0.12)',
                        '&:hover': {
                          backgroundColor: isSelected ? '#0077ed' : 'rgba(255, 255, 255, 0.16)',
                        },
                      }}
                    />
                  );
                })}
              </Stack>
            </Box>
          </Grid>

          {/* Right Column: Accordion List */}
          <Grid item xs={12} md={8}>
            <Box>
              {currentQuestions.map((item, index) => {
                const panelId = `faq-${index}`;
                return (
                  <Accordion
                    key={item.q}
                    expanded={expanded === panelId}
                    onChange={handleAccordionChange(panelId)}
                    disableGutters
                    elevation={0}
                    sx={{
                      backgroundColor: 'transparent',
                      color: '#ffffff',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      '&:before': { display: 'none' },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />}
                      aria-controls={`${panelId}-content`}
                      id={`${panelId}-header`}
                      sx={{
                        px: 0,
                        py: 2,
                        '&:hover': {
                          '& .MuiTypography-root': {
                            color: '#47a3ff',
                          },
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: '1.05rem', sm: '1.2rem' },
                          fontWeight: 600,
                          color: '#ffffff',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {item.q}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 0, pb: 3, pt: 0 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.75)',
                          fontSize: '1rem',
                          lineHeight: 1.65,
                        }}
                      >
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FAQSection;
