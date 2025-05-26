import { StyledReactPaginate } from './Paginator.styled';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { scrollToTop } from '../../helpers/scrollToTop';


const Paginator = ({ pageCount, handlePageClick }) => {

  return  <>
            {
              !!(pageCount - 1) && <StyledReactPaginate
                                      breakLabel="..."
                                      nextLabel={ <MdOutlineArrowForwardIos size={15}/> }
                                      onPageChange={ handlePageClick }
                                      pageCount={pageCount}
                                      previousLabel={ <MdOutlineArrowBackIos size={15} /> }
                                      renderOnZeroPageCount={null}
                                      onPageActive={scrollToTop()}
                                      pageRangeDisplayed={3}
                                      marginPagesDisplayed={2}
                                    />
            }
          </>
};

export default Paginator;
