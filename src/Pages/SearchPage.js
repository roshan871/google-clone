import React from 'react';
import './SearchPage.css';
import { useStateValue } from './stateProvider'
import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import {Link} from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
//import { LocalOfferIcon } from '@mui/icons-material'; 
 //import MorevertIcon from '@material-ui/icons/Morevert'; 




function SearchPage() {
    const [{term='tesla'}, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

     // Mock API call
    // const data= Response;
        //  https://developers.google.com/custom-search/v1/using_rest
        // https://cse.google.com/cse/create/new
        console.log(data);

    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to='/'>
                    <img 
                    className='searchPage-logo' 
                    src='https://www.solopress.com/blog/wp-content/uploads/2015/09/google-new-logo.jpeg'
                    alt='' />
                </Link>
                <div className='searchPage__headerBody'>
                    <Search hideButtons />
                    <div className='searchPage__options'>
                        <div className='searchPage__optionsLeft'>
                            <div className='searchPage__option'>
                                <SearchIcon />
                                <Link to='/all'>All</Link>
                            </div>
                             <div className='searchPage__option'>
                                <DescriptionIcon />
                                <Link to='/news'>News</Link>
                            </div>
                            <div className='searchPage__option'>
                                <ImageIcon />
                                <Link to='/images'>Images</Link>
                            </div>
                              <div className='searchPage__option'>
                                {/* <LocalOfferIcon /> */}
                                <Link to='/shopping'>Shopping</Link>
                            </div> 
                            <div className='searchPage__option'>
                                {/* <RoomIcon /> */}
                                <Link to='/maps'>Maps</Link>
                            </div>
                            <div className='searchPage__option'>
                                {/* <MorevertIcon /> */}
                                <Link to='/more'>More</Link>
                            </div> 
                            
                        </div>
                        <div className='searchPage__optionsRight'>
                            <div className='searchPage__option'>
                                <Link to='/settings'>Settings</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
           { term && (
            <div className='searchPage__results'>
                <p
                className='searchPage__resultCount'>
                   About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                </p>
                {data?.items.map(item => (
                    <div className='searchPage__result'>
                       <a 
                       className='searchPage__resultLink'
                       href={item.link}>
                       {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                           <img
                               className='searchPage__resultImage'
                               src={item.pagemap?.cse_image[0]?.src}
                                alt=''
                               />
                       )}
                        {item.displayLink}
                       </a>
                       <a
                        className='searchPage__resultTitle' href={item.link}>
                        <h2>{item.title}</h2>
                       </a>
                       <p 
                        className='searchPage__resultSnippet'>
                        {item.snippet}
                       </p>
                    </div>
                ))}
            </div>
           )}
          
        </div>
    )
}

export default SearchPage
