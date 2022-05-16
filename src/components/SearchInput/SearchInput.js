import { useState } from 'react';
import { useRouter } from 'next/router';

import {
    IconButton,
    InputBase,
    Paper,
  } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import styles from './searchInput.module.css'

const SearchInput = () => {

    const router = useRouter()

    const [search, setSearch] = useState()

    const handleSubmitSearch = () => {
        router.push({
            pathname: `/search/${search}`
        })
    }

    return (
        <Paper className={styles.searchPaper}>
            <InputBase
                onChange={(e) => setSearch(e.target.value)}
                placeholder='ex: iPhone 12 com garantia'
                fullWidth
            />
            <IconButton onClick={handleSubmitSearch}>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchInput