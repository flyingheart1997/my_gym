
import React, { useState, useEffect } from 'react';
import { debounce } from '../utilities/helpers';
import { Link } from 'react-router-dom';
import { Box, Button, Stack, TextField } from '@mui/material';
// import Logo from '../assets/images/logo-8.png';
import Logo from '../assets/icons/body-part.png';
import SearchImg from '../assets/icons/search.png';
import { exerciseOptions, fetchData } from '../utilities/fetchData';

const Header = ({search, setSearch, setBodyParts, setExercises}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  const headerStyles = {
    position: 'fixed',
    height: '50px',
    width: '100%',
    backgroundColor: '#040011',
    textAlign: 'center',
    transition: 'top 0.6s',
    zIndex: '1',
  }
  
  useEffect(()=>{
    const fetchExercisesData = async ()=> {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData()
  },[setBodyParts])

  const handleSearchBar = async () => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      const searchedExercises = exercisesData.filter((exercise)=>exercise.name.toLowerCase().includes(search) 
      || exercise.target.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('')
      setExercises(searchedExercises)
      window.scrollTo({top:700, behavior:'smooth'})
    }
  }

  const [searchValue, setSearchValue] = useState(false)

  return (
    <div style={{ ...headerStyles, top: visible ? '0' : '-50px' }}>
      <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ gap: { sm: '120px', xs: '20px' }, justifyContent: 'space-between' }} px='10px' marginRight='50px'>
        <Stack sx={{ml:{sm:'30px'}}}>
          <Link to='/' >
            <img src={Logo} color='#fff' alt="logo" style={{ margin: '5px 10px', height: '40px' }} />
          </Link>
        </Stack>
        <Stack direction='row' justify='flex-end' align='center' gap='40px' fontSize='20px'>
          {searchValue ? <Box position='relative' mt='-5px' sx={{ ml: { xs: '-10px', sm: '-110px', md: '-100px' } }}>
            <TextField
              sx={{
                input: { borderRadius: '8px', height: '1px', border: '1.5px solid #2578a1ba', fontWeight: '700', color: '#ddd' }, width: { md: '700px', sm: '500px', lg: '800px', xs: '280px' }, backgroundColor: 'transparent', borderRadius: '8px', "& .MuiOutlinedInput-root": {
                  "& > fieldset": { border: 'none', backgroundColor: 'transparent' }
                }, opacity: .9
              }}
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder="Search Exercises . . ."
              type="text"
            />
            <Button className="search-btn" onClick={() => handleSearchBar() && setSearchValue(false)} sx={{ bgcolor: '#2578a1ba', borderRadius: '8px', color: '#fff', textTransform: 'traction', width: { lg: '173px', sm: '120px', xs: '90px' }, height: '36px', position: 'absolute', right: '0px', fontSize: { lg: '18px', xs: '14px' }, opacity: .7 }} >
              Search
            </Button>
          </Box> : ''}
        </Stack>
        {window.location.pathname !== '/' ?
          <Stack direction='row' justify='flex-end' align='center' gap='25px' fontSize='20px' mt='-5px'>
            <Link to='/' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} style={{ textDecoration: 'none', color: '#ffff', transition: '0.6s ease in out'}}>Home</Link>
          </Stack> : <>
            {!searchValue ? 
              <Stack direction='row' justify='flex-end' align='center' gap='25px' fontSize='20px' mt='-5px'>
                <img src={SearchImg} alt='search' onClick={() => { setSearchValue(true) }} width='25px' height='25px' style={{ cursor: 'pointer' }} />
                {window.pageYOffset < 200 ? <Link to='/' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} style={{ textDecoration: 'none', color: '#ffff', borderBottom: '3px solid #9ACD32', width: '60px', transition: '0.6s ease in out' }}>Home</Link> : <Link to='/' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} style={{ textDecoration: 'none', color: '#ffff', transition: '0.6s ease in out' }}>Home</Link>}

                {window.pageYOffset > 199 ? <a onClick={() => { window.scrollTo({ top: 700, behavior: 'smooth' }) }} href='/#exercise' style={{ textDecoration: 'none', color: '#ffff', borderBottom: '3px solid #9ACD32', width: '80px', transition: '0.6s ease in out' }}>Exercises</a> : <a onClick={() => { window.scrollTo({ top: 700, behavior: 'smooth' }) }} href='/#exercise' style={{ textDecoration: 'none', color: '#ffff', transition: '0.6s ease in out' }}>Exercises</a>}
              </Stack> : ''
            }
        </>}
      </Stack>
    </div>
  );
};

export default Header;