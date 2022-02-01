import React, { useState } from 'react'
import {
  Grid,
  Typography,
  Stack,
  Hidden,
  Box,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { SearchBox } from 'components/SearchBox'
import { MDropBox } from 'components/CustomMaterial'
import RatingsGuideSVG from 'assets/image/ratings-guide.svg'
import RatingsGuideMobileSVG from 'assets/image/ratings-guide-mobile.svg'

const HeroSection = () => {
  const currentUser = useSelector(currentUserSelector)
  const [defaultLabel, setDefaultLabel] = useState('Sort By')

  const sortByItems = [
    { text: 'Popular', value: 'popular' },
    { text: 'Newest', value: 'newest' },
    { text: 'Oldest', value: 'oldest' },
    { text: '4 star or more', value: '4star' },
    { text: '3 star or more', value: '3star' },
    { text: '2 star or more', value: '2star' },
  ]

  return (
    <Grid container spacing={6} sx={{ px: { md: 5, xs: 2 } }}>
      <Grid item md={6} xs={12} order={!currentUser && { md: 1, xs: 2 }}>
        <Stack sx={{ pt: { md: 10, xs: 4 } }}>
          <Typography color="#141414" sx={{ fontSize: { md: 40, xs: 32 } }}>Cryptocurrency Ratings</Typography>

          <Typography color="#555" sx={{ mb: 3, fontSize: { md: 18, xs: 16 } }}>
            This guide includes the 25 largest projects by market capitalisation.
            We will continue to add to this guide over the coming months until we reach a total of 100 projects.
            This guide will be updated and refined on a monthly basis.
          </Typography>

          <Hidden mdDown>
            <Stack direction="row" spacing={0.5}>
              <Typography variant="subTitle" color="#909090">Last updated:</Typography>
              <Typography variant="subTitle" color="#000">01/09/2021</Typography>
            </Stack>
          </Hidden>
        </Stack>
      </Grid>

      <Grid item md={6} xs={12} order={!currentUser && { md: 2, xs: 1 }}>
        {!currentUser ?
          <Box>
            <Hidden mdDown>
              <img src={RatingsGuideSVG} alt="" style={{ width: "100%", height: "100%" }} />
            </Hidden>
            <Hidden mdUp>
              <Box sx={{ px: 4 }}>
                <img src={RatingsGuideMobileSVG} alt="" style={{ width: "100%" }} />
              </Box>
            </Hidden>
          </Box> :
          <Stack direction="row" sx={{ py: { md: 10 } }} spacing={2}>
            <SearchBox placeholder="Search Coins" />
            <MDropBox items={sortByItems} label={defaultLabel} onChange={(text) => setDefaultLabel(text)} />
          </Stack>
        }
      </Grid>
    </Grid >
  )
}

export default HeroSection
